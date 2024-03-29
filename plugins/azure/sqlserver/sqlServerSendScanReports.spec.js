var expect = require("chai").expect;
var sqlServerSendScanReports = require("./sqlServerSendScanReports");

const servers = [
  {
    id: "/subscriptions/123/resourceGroups/test-rg/providers/Microsoft.Sql/servers/test-server",
  },
];

const vulnerabilityAssessments = [
  {
    id: "/subscriptions/123/resourceGroups/test-rg/providers/Microsoft.Sql/servers/test-server/vulnerabilityAssessments/Default",
    name: "Default",
    type: "Microsoft.Sql/servers/vulnerabilityAssessments",
    storageContainerPath:
      "https://sqlvadfi44mwgvnjki.blob.core.windows.net/vulnerability-assessment/",
    recurringScans: {
      isEnabled: true,
      emailSubscriptionAdmins: true,
      emails: ["test@gmail.com"],
    },
  },
  {
    id: "/subscriptions/123/resourceGroups/test-rg/providers/Microsoft.Sql/servers/test-server/vulnerabilityAssessments/Default",
    name: "Default",
    type: "Microsoft.Sql/servers/vulnerabilityAssessments",
    storageContainerPath:
      "https://sqlvadfi44mwgvnjki.blob.core.windows.net/vulnerability-assessment/",
    recurringScans: {
      isEnabled: false,
      emailSubscriptionAdmins: true,
      emails: [],
    },
  },
];

const createCache = (servers, policies, serversErr, policiesErr) => {
  const serverId = servers && servers.length ? servers[0].id : null;
  return {
    servers: {
      listSql: {
        eastus: {
          err: serversErr,
          data: servers,
        },
      },
    },
    vulnerabilityAssessments: {
      listByServer: {
        eastus: {
          [serverId]: {
            err: policiesErr,
            data: policies,
          },
        },
      },
    },
  };
};

describe("sqlServerSendScanReports", function () {
  describe("run", function () {
    it("should give passing result if no SQL servers found", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include("No SQL servers found");
        expect(results[0].region).to.equal("eastus");
        done();
      };

      const cache = createCache([]);

      sqlServerSendScanReports.run(cache, {}, callback);
    });

    it("should give failing result if No Vulnerability Assessments setting found", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "No Vulnerability Assessments setting found"
        );
        expect(results[0].region).to.equal("eastus");
        done();
      };

      const cache = createCache(servers, []);

      sqlServerSendScanReports.run(cache, {}, callback);
    });

    it("should give failing result if Send Scan Reports for the SQL server is disabled", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "Send Scan Reports for the SQL server is disabled"
        );
        expect(results[0].region).to.equal("eastus");
        done();
      };

      const cache = createCache(servers, [vulnerabilityAssessments[1]]);

      sqlServerSendScanReports.run(cache, {}, callback);
    });

    it("should give passing result if Send Scan Reports for the SQL server is enabled", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "Send Scan Reports for the SQL server is enabled"
        );
        expect(results[0].region).to.equal("eastus");
        done();
      };

      const cache = createCache(servers, [vulnerabilityAssessments[0]]);

      sqlServerSendScanReports.run(cache, {}, callback);
    });

    it("should give unknown result if unable to query for SQL servers", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        expect(results[0].message).to.include(
          "Unable to query for SQL servers"
        );
        expect(results[0].region).to.equal("eastus");
        done();
      };

      const cache = createCache(servers, [], {
        message: "unable to query servers",
      });

      sqlServerSendScanReports.run(cache, {}, callback);
    });

    it("should give unknown result if Unable to query for Vulnerability Assessments setting", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        expect(results[0].message).to.include(
          "Unable to query for Vulnerability Assessments setting"
        );
        expect(results[0].region).to.equal("eastus");
        done();
      };

      const cache = createCache(servers, [], null, {
        message: "Unable to query for Vulnerability Assessments setting",
      });

      sqlServerSendScanReports.run(cache, {}, callback);
    });
  });
});
