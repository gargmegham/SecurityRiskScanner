var expect = require("chai").expect;
var passwordExpiry = require("./passwordExpiry");

const getPasswordPolicy = [
  {
    MinimumPasswordLength: 8,
    RequireLowercaseCharacters: false,
    RequireNumbers: false,
    MaxLoginAttemps: 0,
    MaxPasswordAge: 91,
    PasswordReusePrevention: 0,
    HardExpiry: false,
    RequireUppercaseCharacters: false,
    RequireSymbols: false,
  },
  {
    MinimumPasswordLength: 8,
    RequireLowercaseCharacters: false,
    RequireNumbers: false,
    MaxLoginAttemps: 0,
    MaxPasswordAge: 10,
    PasswordReusePrevention: 0,
    HardExpiry: false,
    RequireUppercaseCharacters: true,
    RequireSymbols: false,
  },
];

const createCache = (data, err) => {
  return {
    ram: {
      GetPasswordPolicy: {
        "cn-hangzhou": {
          data: data,
          err: err,
        },
      },
    },
  };
};

describe("passwordExpiry", function () {
  describe("run", function () {
    it("should FAIL if RAM password security policy does not require password to be expired after 90 days", function (done) {
      const cache = createCache(getPasswordPolicy[0]);
      passwordExpiry.run(cache, { china: true }, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "RAM password security policy requires password to be expired after 91 days which is greater than desired limit of 90"
        );
        expect(results[0].region).to.equal("cn-hangzhou");
        done();
      });
    });

    it("should PASS if RAM password security policy requires password to be expired after set days", function (done) {
      const cache = createCache(getPasswordPolicy[1]);
      passwordExpiry.run(
        cache,
        { ram_password_expiry: "100" },
        (err, results) => {
          expect(results.length).to.equal(1);
          expect(results[0].status).to.equal(0);
          expect(results[0].message).to.include(
            "RAM password security policy requires password to be expired after 10 days which is equal to or less than desired limit of 100"
          );
          expect(results[0].region).to.equal("cn-hangzhou");
          done();
        }
      );
    });

    it("should UNKNOWN if unable to query RAM password policy", function (done) {
      const cache = createCache({});
      passwordExpiry.run(cache, { china: true }, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        expect(results[0].message).to.include(
          "Unable to query RAM password policy"
        );
        expect(results[0].region).to.equal("cn-hangzhou");
        done();
      });
    });
  });
});
