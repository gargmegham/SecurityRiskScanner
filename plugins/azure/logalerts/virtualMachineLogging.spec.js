var expect = require("chai").expect;
var virtualMachineLogging = require("./virtualMachineLogging");

const activityLogAlerts = [
  {
    id: "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourceGroups/Default-ActivityLogAlerts/providers/microsoft.insights/activityLogAlerts/NSG2",
    name: "NSG2",
    type: "Microsoft.Insights/ActivityLogAlerts",
    location: "global",
    tags: {},
    scopes: ["/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a"],
    enabled: true,
    condition: {
      allOf: [
        {
          field: "category",
          equals: "Admninistrative",
        },
        {
          field: "operationName",
          equals: "Microsoft.Compute/virtualMachines/",
        },
      ],
    },
    actions: {
      actionGroups: [
        {
          actionGroupId:
            "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourcegroups/default-activitylogalerts/providers/microsoft.insights/actiongroups/testactiong",
          webhookProperties: {},
        },
      ],
    },
  },
  {
    id: "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourceGroups/Default-ActivityLogAlerts/providers/microsoft.insights/activityLogAlerts/NSG2",
    name: "NSG2",
    type: "Microsoft.Insights/ActivityLogAlerts",
    location: "global",
    tags: {},
    scopes: ["/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a"],
    enabled: true,
    condition: {
      allOf: [
        {
          field: "category",
          equals: "Admninistrative",
        },
        {
          field: "operationName",
          equals: "Microsoft.Compute/virtualMachines/write",
        },
        {
          field: "operationName",
          equals: "Microsoft.Compute/virtualMachines/delete",
        },
      ],
    },
    actions: {
      actionGroups: [
        {
          actionGroupId:
            "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourcegroups/default-activitylogalerts/providers/microsoft.insights/actiongroups/testactiong",
          webhookProperties: {},
        },
      ],
    },
  },
  {
    id: "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourceGroups/Default-ActivityLogAlerts/providers/microsoft.insights/activityLogAlerts/NSG2",
    name: "NSG2",
    type: "Microsoft.Insights/ActivityLogAlerts",
    location: "global",
    tags: {},
    scopes: ["/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a"],
    enabled: true,
    condition: {
      allOf: [
        {
          field: "category",
          equals: "Admninistrative",
        },
        {
          field: "operationName",
          equals: "Microsoft.Compute/virtualMachines/write",
        },
      ],
    },
    actions: {
      actionGroups: [
        {
          actionGroupId:
            "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourcegroups/default-activitylogalerts/providers/microsoft.insights/actiongroups/testactiong",
          webhookProperties: {},
        },
      ],
    },
  },
  {
    id: "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourceGroups/Default-ActivityLogAlerts/providers/microsoft.insights/activityLogAlerts/NSG2",
    name: "NSG2",
    type: "Microsoft.Insights/ActivityLogAlerts",
    location: "global",
    tags: {},
    scopes: ["/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a"],
    enabled: true,
    condition: {
      allOf: [
        {
          field: "category",
          equals: "Admninistrative",
        },
        {
          field: "operationName",
          equals: "Microsoft.Compute/virtualMachines/delete",
        },
      ],
    },
    actions: {
      actionGroups: [
        {
          actionGroupId:
            "/subscriptions/e79d9a03-3ab3-4481-bdcd-c5db1d55420a/resourcegroups/default-activitylogalerts/providers/microsoft.insights/actiongroups/testactiong",
          webhookProperties: {},
        },
      ],
    },
  },
];

const createCache = (err, data) => {
  return {
    activityLogAlerts: {
      listBySubscriptionId: {
        global: {
          err: err,
          data: data,
        },
      },
    },
  };
};

describe("virtualMachineLogging", function () {
  describe("run", function () {
    it("should give failing result if no activity log alerts found", function (done) {
      const cache = createCache(null, []);
      virtualMachineLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "No existing Activity Alerts found"
        );
        expect(results[0].region).to.equal("global");
        done();
      });
    });

    it("should give unknown result if unable to query for Activity alerts", function (done) {
      const cache = createCache(null);
      virtualMachineLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(3);
        expect(results[0].message).to.include(
          "Unable to query for Activity Alerts"
        );
        expect(results[0].region).to.equal("global");
        done();
      });
    });

    it("should give failing result if Virtual Machines write and delete is not enabled", function (done) {
      const cache = createCache(null, [activityLogAlerts[0]]);
      virtualMachineLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(2);
        expect(results[0].message).to.include(
          "Log Alert for Virtual Machines write and delete is not enabled"
        );
        expect(results[0].region).to.equal("global");
        done();
      });
    });

    it("should give failing and passing results if Virtual Machines delete is not enaled but write is enabled", function (done) {
      const cache = createCache(null, [activityLogAlerts[2]]);
      virtualMachineLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(2);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "Log alert for Virtual Machines write is enabled"
        );
        expect(results[0].region).to.equal("global");
        expect(results[1].status).to.equal(2);
        expect(results[1].message).to.include(
          "Log Alert for Virtual Machines delete is not enabled"
        );
        expect(results[0].region).to.equal("global");
        done();
      });
    });

    it("should give failing and passing results if Virtual Machines write is not enaled but delete is enabled", function (done) {
      const cache = createCache(null, [activityLogAlerts[3]]);
      virtualMachineLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(2);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "Log alert for Virtual Machines delete is enabled"
        );
        expect(results[0].region).to.equal("global");
        expect(results[1].status).to.equal(2);
        expect(results[1].message).to.include(
          "Log alert for Virtual Machines write is not enabled"
        );
        expect(results[0].region).to.equal("global");
        done();
      });
    });

    it("should give passing result if Virtual Machines write and delete is enabled", function (done) {
      const cache = createCache(null, [activityLogAlerts[1]]);
      virtualMachineLogging.run(cache, {}, (err, results) => {
        expect(results.length).to.equal(1);
        expect(results[0].status).to.equal(0);
        expect(results[0].message).to.include(
          "Log Alert for Virtual Machines write and delete is enabled"
        );
        expect(results[0].region).to.equal("global");
        done();
      });
    });
  });
});
