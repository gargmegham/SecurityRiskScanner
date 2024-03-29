var helpers = require(__dirname + "/helpers.js");
var services = require(__dirname + "/services.json");

module.exports = function (
  api,
  service,
  key,
  OracleConfig,
  parameters,
  callback
) {
  if (!services[api] || !services[api][service] || !services[api][service][key])
    return callback({ code: "Invalid API" });

  var localService = services[api][service][key];

  //replacing endpoint with managementRndpoint value from vault for keys api
  if (api === "kms" && localService.path === "keys") {
    if (!localService.secondaryPath && key === "list") {
      localService.endpoint = parameters.managementEndpoint.replace(
        "https://",
        ""
      );
      delete parameters["managementEndpoint"];
    } else if (
      key === "get" ||
      (localService.secondaryPath &&
        localService.secondaryPath === "keyVersions")
    ) {
      localService.endpoint = localService.endpoint.replace(
        /^[^\s-]*(?=-)/,
        parameters.id.split(".")[4]
      );
    }
  }

  var suffix = "";
  if (localService.encodedGet) {
    suffix += "/" + encodeURIComponent(parameters[localService.encodedGet]);
  }

  if (localService.secondaryPath) {
    suffix += "/" + localService.secondaryPath;
  }

  if (localService.secondaryEncodedGet) {
    suffix +=
      "/" + encodeURIComponent(parameters[localService.secondaryEncodedGet]);
  }
  if (localService.tertiaryPath) {
    suffix += "/" + localService.tertiaryPath;
  }
  if (localService.allowedQueryStrings) {
    suffix += helpers.buildQueryString(
      localService.allowedQueryStrings,
      parameters
    );
  }

  var host = localService.endpoint.replace("{{region}}", OracleConfig.region);

  var httpConfig = {
    path: OracleConfig.RESTversion + "/" + localService.path + suffix,
    host: host,
    headers: helpers.buildHeaders(
      localService.allowedHeaders || [],
      parameters
    ),
    method: localService.method,
  };

  if (localService.debug) {
    console.log(
      "API: " +
        api +
        "; SERVICE: " +
        service +
        "; KEY: " +
        key +
        "; PARAMS: " +
        JSON.stringify(parameters)
    );
    console.log("[DEBUG] " + JSON.stringify(httpConfig, null, 2));
  }

  helpers.call(OracleConfig, httpConfig, callback);
};
