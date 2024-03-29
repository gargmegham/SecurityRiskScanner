var expect = require("chai").expect;
const emptyASG = require("./emptyASG");

const autoScalingGroups = [
  {
    AutoScalingGroupName: "auto-scaling-test-group",
    AutoScalingGroupARN:
      "arn:aws:autoscaling:us-east-1:111122223333:autoScalingGroup:e83ceb12-2760-4a92-a374-3df611331bdc:autoScalingGroupName/auto-scaling-test-group",
    LaunchTemplate: {
      LaunchTemplateId: "lt-0f1f6b356026abc86",
      LaunchTemplateName: "auto-scaling-template",
      Version: "$Default",
    },
    MinSize: 1,
    MaxSize: 1,
    DesiredCapacity: 1,
    DefaultCooldown: 300,
    AvailabilityZones: ["us-east-1a"],
    LoadBalancerNames: [],
    TargetGroupARNs: [],
    HealthCheckType: "EC2",
    HealthCheckGracePeriod: 300,
    Instances: [
      {
        InstanceId: "i-093267d7a579c4bee",
        InstanceType: "t2.micro",
        AvailabilityZone: "us-east-1a",
        LifecycleState: "InService",
        HealthStatus: "Healthy",
        LaunchTemplate: {
          LaunchTemplateId: "lt-0f1f6b356026abc86",
          LaunchTemplateName: "auto-scaling-template",
          Version: "1",
        },
        ProtectedFromScaleIn: false,
      },
    ],
    CreatedTime: "2020-08-18T23:12:00.954Z",
    SuspendedProcesses: [],
    VPCZoneIdentifier: "subnet-06aa0f60",
    EnabledMetrics: [],
    Tags: [],
    TerminationPolicies: ["Default"],
    NewInstancesProtectedFromScaleIn: false,
    ServiceLinkedRoleARN:
      "arn:aws:iam::111122223333:role/aws-service-role/autoscaling.amazonaws.com/AWSServiceRoleForAutoScaling",
  },
  {
    AutoScalingGroupName: "auto-scaling-test-group",
    AutoScalingGroupARN:
      "arn:aws:autoscaling:us-east-1:111122223333:autoScalingGroup:e83ceb12-2760-4a92-a374-3df611331bdc:autoScalingGroupName/auto-scaling-test-group",
    LaunchTemplate: {
      LaunchTemplateId: "lt-0f1f6b356026abc86",
      LaunchTemplateName: "auto-scaling-template",
      Version: "$Default",
    },
    MinSize: 1,
    MaxSize: 1,
    DesiredCapacity: 1,
    DefaultCooldown: 300,
    AvailabilityZones: ["us-east-1a"],
    LoadBalancerNames: [],
    TargetGroupARNs: [],
    HealthCheckType: "EC2",
    HealthCheckGracePeriod: 300,
    Instances: [],
    CreatedTime: "2020-08-18T23:12:00.954Z",
    SuspendedProcesses: [],
    VPCZoneIdentifier: "subnet-06aa0f60",
    EnabledMetrics: [],
    Tags: [],
    TerminationPolicies: ["Default"],
    NewInstancesProtectedFromScaleIn: false,
    ServiceLinkedRoleARN:
      "arn:aws:iam::111122223333:role/aws-service-role/autoscaling.amazonaws.com/AWSServiceRoleForAutoScaling",
  },
];

const createCache = (asgs, notifications) => {
  return {
    autoscaling: {
      describeAutoScalingGroups: {
        "us-east-1": {
          data: asgs,
        },
      },
    },
  };
};

const createErrorCache = () => {
  return {
    autoscaling: {
      describeAutoScalingGroups: {
        "us-east-1": {
          err: {
            message: "error describing autoscaling groups",
          },
        },
      },
    },
  };
};

const createNullCache = () => {
  return {
    autoscaling: {
      describeAutoScalingGroups: {
        "us-east-1": null,
      },
    },
  };
};

describe("emptyASG", function () {
  describe("run", function () {
    it("should PASS if autoscaling group contains instance(s)", function (done) {
      const cache = createCache([autoScalingGroups[0]]);
      emptyASG.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        done();
      });
    });

    it("should FAIL if autoscaling group does not contain instance(s)", function (done) {
      const cache = createCache([autoScalingGroups[1]]);
      emptyASG.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        done();
      });
    });

    it("should PASS if no autoscaling group data found ", function (done) {
      const cache = createCache([]);
      emptyASG.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        done();
      });
    });

    it("should UNKNOWN if unable to describe autoscaling group found", function (done) {
      const cache = createErrorCache();
      emptyASG.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        done();
      });
    });

    it("should not return anything if no autoscaling group found", function (done) {
      const cache = createNullCache();
      emptyASG.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(0);
        done();
      });
    });
  });
});
