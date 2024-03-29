var expect = require("chai").expect;
var dmsMultiAZFeatureEnabled = require("./dmsMultiAZFeatureEnabled");

const describeReplicationInstances = [
  {
    ReplicationInstanceIdentifier: "mine1",
    ReplicationInstanceClass: "dms.t3.micro",
    ReplicationInstanceStatus: "creating",
    MultiAZ: true,
    KmsKeyId:
      "arn:aws:kms:us-east-1:000011112222:key/d691a16e-cc12-4611-8145-93f92d7d6eaf",
    ReplicationInstanceArn:
      "arn:aws:dms:us-east-1:000011112222:rep:XR6L5CYX66ALXX2GE3Y5E25G3LUW76KGZ5PUIEI",
    PubliclyAccessible: true,
  },
  {
    ReplicationInstanceIdentifier: "mine1",
    ReplicationInstanceClass: "dms.t3.micro",
    ReplicationInstanceStatus: "creating",
    MultiAZ: false,
    KmsKeyId:
      "arn:aws:kms:us-east-1:000011112222:key/d691a16e-cc12-4611-8145-93f92d7d6eaf",
    ReplicationInstanceArn:
      "arn:aws:dms:us-east-1:000011112222:rep:XR6L5CYX66ALXX2GE3Y5E25G3LUW76KGZ5PUIEI",
    PubliclyAccessible: true,
  },
];

const createCache = (instances, instancesErr) => {
  return {
    dms: {
      describeReplicationInstances: {
        "us-east-1": {
          err: instancesErr,
          data: instances,
        },
      },
    },
  };
};

describe("dmsMultiAZFeatureEnabled", function () {
  describe("run", function () {
    it("should PASS if DMS replication instances have Multi-AZ feature enabled.", function (done) {
      const cache = createCache([describeReplicationInstances[0]]);
      dmsMultiAZFeatureEnabled.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "DMS replication instance has Multi-AZ feature enabled"
        );
        expect(results[0].region).to.equal("us-east-1");
        done();
      });
    });

    it("should FAIL if DMS replication instances does not have Multi-AZ feature enabled.", function (done) {
      const cache = createCache([describeReplicationInstances[1]]);
      dmsMultiAZFeatureEnabled.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "DMS replication instance does not have Multi-AZ feature enabled"
        );
        expect(results[0].region).to.equal("us-east-1");
        done();
      });
    });

    it("should PASS if no DMS replication instances found", function (done) {
      const cache = createCache([]);
      dmsMultiAZFeatureEnabled.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "No DMS replication instances found"
        );
        expect(results[0].region).to.equal("us-east-1");
        done();
      });
    });

    it("should UNKNOWN if unable to list DMS replication instances", function (done) {
      const cache = createCache(null, {
        message: "Unable to list DMS replication instances",
      });
      dmsMultiAZFeatureEnabled.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        expect(results[0].region).to.equal("us-east-1");
        done();
      });
    });
  });
});
