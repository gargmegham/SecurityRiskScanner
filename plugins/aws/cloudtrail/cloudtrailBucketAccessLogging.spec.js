var expect = require("chai").expect;
var cloudtrailBucketAccessLogging = require("./cloudtrailBucketAccessLogging");

const trails = [
  {
    Name: "trail-1",
    S3BucketName: "aws-cloudtrail-logs-123456654321-119d2f9a",
    IncludeGlobalServiceEvents: true,
    IsMultiRegionTrail: true,
    HomeRegion: "us-east-1",
    TrailARN: "arn:aws:cloudtrail:us-east-1:123456654321:trail/trail-1",
    LogFileValidationEnabled: true,
    KmsKeyId: "a14dea26-1459-4f62-ab85-d5a54293a495",
    HasCustomEventSelectors: true,
    HasInsightSelectors: false,
    IsOrganizationTrail: false,
  },
  {
    Name: "trail-2",
    S3BucketName: "aws-cloudtrail-logs-123456654321-37b755bd",
    IncludeGlobalServiceEvents: true,
    IsMultiRegionTrail: false,
    HomeRegion: "us-east-1",
    TrailARN: "arn:aws:cloudtrail:us-east-1:123456654321:trail/trail-2",
    LogFileValidationEnabled: false,
    HasCustomEventSelectors: false,
    HasInsightSelectors: false,
    IsOrganizationTrail: false,
  },
  {
    Name: "trail-3",
    S3BucketName: "codepipeline-cloudtrail-placeholder-bucket-us-east-1",
    IncludeGlobalServiceEvents: true,
    IsMultiRegionTrail: false,
    HomeRegion: "us-east-1",
    TrailARN: "arn:aws:cloudtrail:us-east-1:123456654321:trail/trail-2",
    LogFileValidationEnabled: false,
    HasCustomEventSelectors: false,
    HasInsightSelectors: false,
    IsOrganizationTrail: false,
  },
];

const listBuckets = [
  {
    Name: "aws-cloudtrail-logs-123456654321-119d2f9a",
    CreationDate: "2020-11-04T20:20:20.000Z",
  },
  {
    Name: "aws-cloudtrail-logs-123456654321-37b755bd",
    CreationDate: "2020-11-01T19:04:08.000Z",
  },
];

const getBucketLogging = [
  {
    LoggingEnabled: true,
  },
  {
    LoggingEnabled: false,
  },
];

const createCache = (trails, buckets, getBucketLogging) => {
  var bucketName = trails && trails.length ? trails[0].S3BucketName : null;
  return {
    cloudtrail: {
      describeTrails: {
        "us-east-1": {
          data: trails,
        },
      },
    },
    s3: {
      listBuckets: {
        "us-east-1": {
          data: buckets,
        },
      },
      getBucketLogging: {
        "us-east-1": {
          [bucketName]: {
            data: getBucketLogging,
          },
        },
      },
    },
  };
};

const createErrorCache = () => {
  return {
    cloudtrail: {
      describeTrails: {
        "us-east-1": {
          err: {
            message: "error describing trails",
          },
        },
      },
    },
  };
};

const createNullCache = () => {
  return {
    cloudtrail: {
      describeTrails: {
        "us-east-1": null,
      },
    },
    s3: {
      listBuckets: {
        "us-east-1": null,
      },
      getBucketLogging: {
        "us-east-1": null,
      },
    },
  };
};

describe("cloudtrailBucketAccessLogging", function () {
  describe("run", function () {
    it("should PASS if bucket has S3 access logs enabled", function (done) {
      const cache = createCache(
        [trails[0]],
        [listBuckets[0]],
        getBucketLogging[0]
      );
      cloudtrailBucketAccessLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        done();
      });
    });

    it("should WARN if bucket has S3 access logs disabled", function (done) {
      const cache = createCache(
        [trails[1]],
        [listBuckets[1]],
        getBucketLogging[1]
      );
      cloudtrailBucketAccessLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(1);
        done();
      });
    });

    it("should FAIL if Unable to locate S3 bucket, it may have been deleted", function (done) {
      const cache = createCache(
        [trails[2]],
        [listBuckets[1]],
        getBucketLogging[1]
      );
      cloudtrailBucketAccessLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        done();
      });
    });

    it("should PASS if no S3 bucket to check", function (done) {
      const cache = createCache([], [], null);
      cloudtrailBucketAccessLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        done();
      });
    });

    it("should UNKNOWN if unable to query for trails", function (done) {
      const cache = createErrorCache();
      cloudtrailBucketAccessLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        done();
      });
    });

    it("should UNKNOWN if unable to query for bucket policy", function (done) {
      const cache = createCache([trails[1]], [listBuckets[1]]);
      cloudtrailBucketAccessLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        done();
      });
    });

    it("should PASS if bucket gets whitelisted", function (done) {
      const cache = createCache(
        [trails[2]],
        [listBuckets[1]],
        getBucketLogging[1]
      );
      cloudtrailBucketAccessLogging.run(
        cache,
        { whitelist_ct_access_logging_buckets: "codepipeline-cloudtrail" },
        (err, results) => {
          expect(results.length).to.equal(1);
          expect(results[0].status).to.equal(0);
          expect(results[0].message).to.include("Bucket is whitelisted");
          done();
        }
      );
    });
  });
});
