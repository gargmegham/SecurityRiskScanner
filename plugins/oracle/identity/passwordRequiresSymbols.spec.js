var expect = require("chai").expect;
var plugin = require("./passwordRequiresSymbols");

const authenticationPolicy = [
  {
    passwordPolicy: {
      minimumPasswordLength: 15,
      isUppercaseCharactersRequired: true,
      isLowercaseCharactersRequired: true,
      isNumericCharactersRequired: true,
      isSpecialCharactersRequired: true,
      isUsernameContainmentAllowed: false,
      isPasswordResetEnabled: true,
    },
  },
  {
    passwordPolicy: {
      minimumPasswordLength: 12,
      isUppercaseCharactersRequired: true,
      isLowercaseCharactersRequired: false,
      isNumericCharactersRequired: false,
      isSpecialCharactersRequired: false,
      isUsernameContainmentAllowed: false,
      isPasswordResetEnabled: true,
    },
  },
];

const createCache = (err, data) => {
  return {
    regionSubscription: {
      list: {
        "us-ashburn-1": {
          data: [
            {
              regionKey: "IAD",
              regionName: "us-ashburn-1",
              status: "READY",
              isHomeRegion: true,
            },
            {
              regionKey: "LHR",
              regionName: "uk-london-1",
              status: "READY",
              isHomeRegion: false,
            },
            {
              regionKey: "PHX",
              regionName: "us-phoenix-1",
              status: "READY",
              isHomeRegion: false,
            },
          ],
        },
      },
    },
    authenticationPolicy: {
      get: {
        "us-ashburn-1": {
          err: err,
          data: data,
        },
      },
    },
  };
};

describe("passwordRequiresSymbols", function () {
  describe("run", function () {
    it("should give unknown result if unable to query for password policy status", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(3);
        expect(results[0].message).to.include(
          "Unable to query for password policy status"
        );
        expect(results[0].region).to.equal("global");
        done();
      };

      const cache = createCache({ err: "error" }, undefined);

      plugin.run(cache, {}, callback);
    });

    it("should give passing result if no password policies found", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include("No password policies found");
        expect(results[0].region).to.equal("global");
        done();
      };

      const cache = createCache(null, []);

      plugin.run(cache, {}, callback);
    });

    it("should give passing result if password policy requires special characters", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "Password policy requires special characters"
        );
        expect(results[0].region).to.equal("global");
        done();
      };

      const cache = createCache(null, [authenticationPolicy[0]]);

      plugin.run(cache, {}, callback);
    });

    it("should give warn result if password policy does not require special characters", function (done) {
      const callback = (err, results) => {
        expect(results.length).to.be.above(0);
        expect(results[0].status).to.equal(1);
        expect(results[0].message).to.include(
          "Password policy does not require special characters"
        );
        expect(results[0].region).to.equal("global");
        done();
      };

      const cache = createCache(null, [authenticationPolicy[1]]);

      plugin.run(cache, {}, callback);
    });
  });
});
