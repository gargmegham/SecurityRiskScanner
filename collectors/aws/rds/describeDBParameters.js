var AWS = require("aws-sdk");
var async = require("async");
var helpers = require(__dirname + "/../../../helpers/aws");

module.exports = function (AWSConfig, collection, retries, callback) {
  var rds = new AWS.RDS(AWSConfig);
  async.eachLimit(
    collection.rds.describeDBParameterGroups[AWSConfig.region].data,
    15,
    function (group, cb) {
      collection.rds.describeDBParameters[AWSConfig.region][
        group.DBParameterGroupName
      ] = {};
      var params = {
        DBParameterGroupName: group.DBParameterGroupName,
      };

      var paginating = false;
      var paginateCb = function (err, data) {
        if (err)
          collection.rds.describeDBParameters[AWSConfig.region][
            group.DBParameterGroupName
          ].err = err;

        if (!data) return cb();

        if (
          paginating &&
          data.Parameters &&
          data.Parameters.length &&
          collection.rds.describeDBParameters[AWSConfig.region][
            group.DBParameterGroupName
          ].data.Parameters &&
          collection.rds.describeDBParameters[AWSConfig.region][
            group.DBParameterGroupName
          ].data.Parameters.length
        ) {
          collection.rds.describeDBParameters[AWSConfig.region][
            group.DBParameterGroupName
          ].data.Parameters = collection.rds.describeDBParameters[
            AWSConfig.region
          ][group.DBParameterGroupName].data.Parameters.concat(data.Parameters);
        } else {
          collection.rds.describeDBParameters[AWSConfig.region][
            group.DBParameterGroupName
          ].data = data;
        }

        if (data.Marker && data.Marker.length) {
          paginating = true;
          return execute(data.Marker);
        }

        cb();
      };

      function execute(marker) {
        // eslint-disable-line no-inner-declarations
        var localParams = JSON.parse(JSON.stringify(params || {}));
        if (marker) localParams["Marker"] = marker;
        if (marker) {
          helpers.makeCustomCollectorCall(
            rds,
            "describeDBParameters",
            localParams,
            retries,
            null,
            null,
            null,
            paginateCb
          );
        } else {
          helpers.makeCustomCollectorCall(
            rds,
            "describeDBParameters",
            params,
            retries,
            null,
            null,
            null,
            paginateCb
          );
        }
      }

      execute();
    },
    function () {
      callback();
    }
  );
};
