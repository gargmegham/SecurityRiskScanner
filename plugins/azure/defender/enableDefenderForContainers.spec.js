var assert = require("assert");
var expect = require("chai").expect;
var auth = require("./enableDefenderForContainers");

const createCache = (err, data) => {
  return {
    pricings: {
      list: {
        global: {
          err: err,
          data: data,
        },
      },
    },
  };
};

describe("enableDefenderForKubernetes", function () {
  describe("run", function () {
    it("should give passing result if no pricings found", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include("No Pricing information found");
        expect(results[0].region).to.equal("global");
        done();
      };

      const cache = createCache(null, []);

      auth.run(cache, {}, callback);
    });

    it("should give failing result if Azure Defender for Containers is not enabled", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "Azure Defender is not enabled for Containers"
        );
        expect(results[0].region).to.equal("global");
        done();
      };

      const cache = createCache(null, [
        {
          id: "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/providers/Microsoft.Security/pricings/default",
          name: "KubernetesService",
          type: "Microsoft.Security/pricings",
          pricingTier: "free",
          location: "global",
        },
      ]);

      auth.run(cache, {}, callback);
    });

    it("should give passing result if Azure Defender for Containers is enabled", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "Azure Defender is enabled for Containers"
        );
        expect(results[0].region).to.equal("global");
        done();
      };

      const cache = createCache(null, [
        {
          id: "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/providers/Microsoft.Security/pricings/default",
          name: "Containers",
          type: "Microsoft.Security/pricings",
          pricingTier: "Standard",
          location: "global",
        },
      ]);

      auth.run(cache, {}, callback);
    });
  });
});
