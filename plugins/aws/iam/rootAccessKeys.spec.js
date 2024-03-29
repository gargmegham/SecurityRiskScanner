var expect = require("chai").expect;
const rootAccessKeys = require("./rootAccessKeys");

const generateCredentialReport = [
  {
    user: "<root_account>",
    arn: "arn:aws:iam::111122223333:root",
    user_creation_time: "2020-08-09T16:55:28+00:00",
    password_enabled: "not_supported",
    password_last_used: "2020-11-11T10:33:09+00:00",
    password_last_changed: "not_supported",
    password_next_rotation: "not_supported",
    mfa_active: false,
    access_key_1_active: false,
    access_key_1_last_rotated: "2020-08-18T14:36:56+00:00",
    access_key_1_last_used_date: "2020-08-18T15:24:00+00:00",
    access_key_1_last_used_region: "us-east-1",
    access_key_1_last_used_service: "iam",
    access_key_2_active: false,
    access_key_2_last_rotated: "2020-08-23T22:07:52+00:00",
    access_key_2_last_used_date: "2020-09-06T00:35:00+00:00",
    access_key_2_last_used_region: "us-east-1",
    access_key_2_last_used_service: "s3",
    cert_1_active: false,
    cert_1_last_rotated: null,
    cert_2_active: false,
    cert_2_last_rotated: null,
  },
  {
    user: "<root_account>",
    arn: "arn:aws:iam::111122223333:root",
    user_creation_time: "2020-09-12T16:58:32+00:00",
    password_enabled: true,
    password_last_used: "2020-11-13T13:18:29+00:00",
    password_last_changed: "2020-09-12T17:02:21+00:00",
    password_next_rotation: null,
    mfa_active: false,
    access_key_1_active: true,
    access_key_1_last_rotated: "2020-09-12T16:58:34+00:00",
    access_key_1_last_used_date: "2020-11-13T16:14:00+00:00",
    access_key_1_last_used_region: "us-east-1",
    access_key_1_last_used_service: "kms",
    access_key_2_active: true,
    access_key_2_last_rotated: null,
    access_key_2_last_used_date: null,
    access_key_2_last_used_region: null,
    access_key_2_last_used_service: null,
    cert_1_active: false,
    cert_1_last_rotated: null,
    cert_2_active: false,
    cert_2_last_rotated: null,
  },
];

const createCache = (report) => {
  return {
    iam: {
      generateCredentialReport: {
        "us-east-1": {
          data: report,
        },
      },
    },
  };
};

const createErrorCache = () => {
  return {
    iam: {
      generateCredentialReport: {
        "us-east-1": {
          err: {
            message: "error generating credential report",
          },
        },
      },
    },
  };
};

const createNullCache = () => {
  return {
    iam: {
      generateCredentialReport: {
        "us-east-1": null,
      },
    },
  };
};

describe("rootAccessKeys", function () {
  describe("run", function () {
    it("should PASS if access keys were not found for the root account", function (done) {
      const cache = createCache([generateCredentialReport[0]]);
      rootAccessKeys.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        done();
      });
    });

    it("should FAIL if access keys were found for the root account", function (done) {
      const cache = createCache([generateCredentialReport[1]]);
      rootAccessKeys.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        done();
      });
    });

    it("should UNKNOWN if unable to query for root user", function (done) {
      const cache = createCache([]);
      rootAccessKeys.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        done();
      });
    });

    it("should UNKNOWN if unable to generate credential report", function (done) {
      const cache = createErrorCache();
      rootAccessKeys.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        done();
      });
    });

    it("should not return anything if generate credential report response not found", function (done) {
      const cache = createNullCache();
      rootAccessKeys.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(0);
        done();
      });
    });
  });
});
