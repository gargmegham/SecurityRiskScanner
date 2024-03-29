var helpers = require("../../../helpers/oracle");

module.exports = {
  title: "Block Storage Policy Protection",
  category: "Block Storage",
  domain: "Storage",
  description:
    "Ensure policy statements have deletion protection for block volumes unless it is an administrator group.",
  more_info:
    "Adding deletion protection to Oracle block volume policies mitigates unintended deletion of block and boot volumes by unauthorized users or groups.",
  link: "https://docs.cloud.oracle.com/iaas/Content/Security/Reference/iam_security.htm",
  recommended_action:
    "When writing policies, avoid blanket statements, and add a where statement with the line request.permission != {VOLUME_DELETE, VOLUME_BACKUP_DELETE, VOLUME_ATTACHMENT_DELETE}.",
  apis: ["policy:list"],
  settings: {
    policy_group_admins: {
      name: "Admin groups with delete permissions.",
      description:
        "Comma separated list of the admin groups allowed to delete resources.",
      regex: "^.{1,255}$",
      default: "Administrators",
    },
  },

  run: function (cache, settings, callback) {
    var results = [];
    var source = {};
    var config = {
      policy_group_admins:
        settings.policy_group_admins ||
        this.settings.policy_group_admins.default,
    };

    var region = helpers.objectFirstKey(cache["regionSubscription"]["list"]);

    var policies = helpers.addSource(cache, source, ["policy", "list", region]);

    if (!policies) return callback(null, results, source);

    if (policies.err || !policies.data) {
      helpers.addResult(
        results,
        3,
        "Unable to query for policies: " + helpers.addError(policies),
        region
      );
      return callback(null, results, source);
    }

    if (!policies.data.length) {
      helpers.addResult(results, 0, "No policies found", region);
      return callback(null, results, source);
    }
    var policyProtection = true;
    var entered = false;
    var resourceTypes = [
      "volume",
      "volume-backups",
      "volume-attachments",
      "volume-family",
    ];
    policies.data.forEach((policy) => {
      if (policy.statements && policy.statements.length) {
        entered = true;
        policy.statements.forEach((statement) => {
          var statementObj = helpers.normalizePolicyStatement(statement);
          var statementPasses = helpers.testStatement(
            statementObj,
            resourceTypes,
            config.policy_group_admins
          );

          if (!statementPasses) {
            policyProtection = false;

            helpers.addResult(
              results,
              2,
              `${statementObj["subjectType"]}${statementObj["subject"]} has the ability to delete all block storage volumes in ${statementObj["location"]}`,
              region,
              policy.id
            );
          }
        });
      }
    });

    if (policyProtection && entered) {
      helpers.addResult(
        results,
        0,
        "All policies have block volume delete protection enabled",
        region
      );
    }

    callback(null, results, source);
  },
};
