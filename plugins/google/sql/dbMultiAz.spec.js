var expect = require("chai").expect;
var plugin = require("./dbMultiAz");

const createCache = (err, data) => {
  return {
    sql: {
      list: {
        global: {
          err: err,
          data: data,
        },
      },
    },
    projects: {
      get: {
        global: {
          data: [{ name: "test-project" }],
        },
      },
    },
  };
};

describe("dbMultiAz", function () {
  describe("run", function () {
    it("should give unknown result if a sql instance error is passed or no data is present", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(3);
        expect(results[0].message).to.include("Unable to query SQL instances");
        expect(results[0].region).to.equal("global");
        done();
      };
      const cache = createCache(["error"], null);
      plugin.run(cache, {}, callback);
    });
    it("should give passing result if no sql instances found", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include("No SQL instances found");
        expect(results[0].region).to.equal("global");
        done();
      };
      const cache = createCache(null, []);
      plugin.run(cache, {}, callback);
    });
    it("should give passing result if sql instance has multi-AZ enabled", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "SQL instance has multi-AZ enabled"
        );
        expect(results[0].region).to.equal("global");
        done();
      };
      const cache = createCache(null, [
        {
          name: "testing-instance1",
          instanceType: "CLOUD_SQL_INSTANCE",
          failoverReplica: {
            available: true,
          },
        },
      ]);
      plugin.run(cache, {}, callback);
    });
    it("should give failing result if sql instance does not have multi-AZ enabled", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "SQL instance does not have multi-AZ enabled"
        );
        expect(results[0].region).to.equal("global");
        done();
      };
      const cache = createCache(null, [
        {
          name: "testing-instance1",
          instanceType: "CLOUD_SQL_INSTANCE",
          failoverReplica: {
            available: false,
          },
        },
      ]);
      plugin.run(cache, {}, callback);
    });
  });
});
