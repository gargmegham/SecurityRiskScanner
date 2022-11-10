// Export all available scans

module.exports = {
  aws: {
    accessAnalyzerEnabled: require(__dirname +
      "/plugins/aws/accessanalyzer/accessAnalyzerEnabled.js"),
    accessAnalyzerActiveFindings: require(__dirname +
      "/plugins/aws/accessanalyzer/accessAnalyzerActiveFindings.js"),

    acmValidation: require(__dirname + "/plugins/aws/acm/acmValidation.js"),
    acmCertificateExpiry: require(__dirname +
      "/plugins/aws/acm/acmCertificateExpiry.js"),
    acmSingleDomainNameCertificate: require(__dirname +
      "/plugins/aws/acm/acmSingleDomainNameCertificate.js"),
    acmCertificateHasTags: require(__dirname +
      "/plugins/aws/acm/acmCertificateHasTags.js"),

    appmeshVGAccessLogging: require(__dirname +
      "/plugins/aws/appmesh/appmeshVGAccessLogging.js"),

    apigatewayCertificateRotation: require(__dirname +
      "/plugins/aws/apigateway/apigatewayCertificateRotation.js"),
    apigatewayCloudwatchLogs: require(__dirname +
      "/plugins/aws/apigateway/apigatewayCloudwatchLogs.js"),
    apigatewayPrivateEndpoints: require(__dirname +
      "/plugins/aws/apigateway/apigatewayPrivateEndpoints.js"),
    apigatewayContentEncoding: require(__dirname +
      "/plugins/aws/apigateway/apigatewayContentEncoding.js"),
    apigatewayTracingEnabled: require(__dirname +
      "/plugins/aws/apigateway/apigatewayTracingEnabled.js"),
    apigatewayWafEnabled: require(__dirname +
      "/plugins/aws/apigateway/apigatewayWafEnabled.js"),
    detailedCloudWatchMetrics: require(__dirname +
      "/plugins/aws/apigateway/detailedCloudWatchMetrics.js"),
    apigatewayClientCertificate: require(__dirname +
      "/plugins/aws/apigateway/apigatewayClientCertificate.js"),
    apigatewayResponseCaching: require(__dirname +
      "/plugins/aws/apigateway/apigatewayResponseCaching.js"),
    apiStageLevelCacheEncryption: require(__dirname +
      "/plugins/aws/apigateway/apiStageLevelCacheEncryption.js"),

    restrictExternalTraffic: require(__dirname +
      "/plugins/aws/appmesh/restrictExternalTraffic.js"),
    appmeshTLSRequired: require(__dirname +
      "/plugins/aws/appmesh/appmeshTLSRequired.js"),

    asgMultiAz: require(__dirname + "/plugins/aws/autoscaling/asgMultiAz.js"),
    asgActiveNotifications: require(__dirname +
      "/plugins/aws/autoscaling/asgActiveNotifications.js"),
    asgCooldownPeriod: require(__dirname +
      "/plugins/aws/autoscaling/asgCooldownPeriod.js"),
    emptyASG: require(__dirname + "/plugins/aws/autoscaling/emptyASG.js"),
    sameAzElb: require(__dirname + "/plugins/aws/autoscaling/sameAzElb.js"),
    asgMissingELB: require(__dirname +
      "/plugins/aws/autoscaling/asgMissingELB.js"),
    webTierAsgAssociatedElb: require(__dirname +
      "/plugins/aws/autoscaling/webTierAsgAssociatedElb.js"),
    elbHealthCheckActive: require(__dirname +
      "/plugins/aws/autoscaling/elbHealthCheckActive.js"),
    asgSuspendedProcesses: require(__dirname +
      "/plugins/aws/autoscaling/asgSuspendedProcesses.js"),
    appTierAsgApprovedAmi: require(__dirname +
      "/plugins/aws/autoscaling/appTierAsgApprovedAmi.js"),
    webTierAsgApprovedAmi: require(__dirname +
      "/plugins/aws/autoscaling/webTierAsgApprovedAmi.js"),
    appTierAsgCloudwatchLogs: require(__dirname +
      "/plugins/aws/autoscaling/appTierAsgCloudwatchLogs.js"),
    webTierAsgCloudwatchLogs: require(__dirname +
      "/plugins/aws/autoscaling/webTierAsgCloudwatchLogs.js"),
    asgMissingSecurityGroups: require(__dirname +
      "/plugins/aws/autoscaling/asgMissingSecurityGroups.js"),
    webTierIamRole: require(__dirname +
      "/plugins/aws/autoscaling/webTierIamRole.js"),
    appTierIamRole: require(__dirname +
      "/plugins/aws/autoscaling/appTierIamRole.js"),
    asgUnusedLaunchConfiguration: require(__dirname +
      "/plugins/aws/autoscaling/asgUnusedLaunchConfiguration.js"),

    workgroupEncrypted: require(__dirname +
      "/plugins/aws/athena/workgroupEncrypted.js"),
    workgroupEnforceConfiguration: require(__dirname +
      "/plugins/aws/athena/workgroupEnforceConfiguration.js"),

    infraConfigNotificationEnabled: require(__dirname +
      "/plugins/aws/imagebuilder/infraConfigNotificationEnabled.js"),
    publicS3Origin: require(__dirname +
      "/plugins/aws/cloudfront/publicS3Origin.js"),
    secureOrigin: require(__dirname +
      "/plugins/aws/cloudfront/secureOrigin.js"),
    insecureProtocols: require(__dirname +
      "/plugins/aws/cloudfront/insecureProtocols.js"),
    cloudfrontHttpsOnly: require(__dirname +
      "/plugins/aws/cloudfront/cloudfrontHttpsOnly.js"),
    cloudfrontLoggingEnabled: require(__dirname +
      "/plugins/aws/cloudfront/cloudfrontLoggingEnabled.js"),
    cloudfrontWafEnabled: require(__dirname +
      "/plugins/aws/cloudfront/cloudfrontWafEnabled.js"),
    cloudfrontFieldLevelEncryption: require(__dirname +
      "/plugins/aws/cloudfront/cloudfrontFieldLevelEncryption.js"),
    cloudfrontInUse: require(__dirname +
      "/plugins/aws/cloudfront/cloudfrontInUse.js"),
    enableOriginFailOver: require(__dirname +
      "/plugins/aws/cloudfront/enableOriginFailOver.js"),
    cloudfrontGeoRestriction: require(__dirname +
      "/plugins/aws/cloudfront/cloudfrontGeoRestriction.js"),
    compressObjectsAutomatically: require(__dirname +
      "/plugins/aws/cloudfront/compressObjectsAutomatically.js"),

    volumeEncryption: require(__dirname +
      "/plugins/aws/comprehend/volumeEncryption.js"),
    outputResultEncryption: require(__dirname +
      "/plugins/aws/comprehend/outputResultEncryption.js"),

    plainTextParameters: require(__dirname +
      "/plugins/aws/cloudformation/plainTextParameters.js"),
    stackFailedStatus: require(__dirname +
      "/plugins/aws/cloudformation/stackFailedStatus.js"),
    driftDetection: require(__dirname +
      "/plugins/aws/cloudformation/driftDetection.js"),
    stackTerminationProtection: require(__dirname +
      "/plugins/aws/cloudformation/stackTerminationProtection.js"),
    stackNotifications: require(__dirname +
      "/plugins/aws/cloudformation/stackNotifications.js"),
    cloudformationAdminPriviliges: require(__dirname +
      "/plugins/aws/cloudformation/cloudformationAdminPriviliges.js"),
    cloudformationInUse: require(__dirname +
      "/plugins/aws/cloudformation/cloudformationInUse.js"),

    cloudtrailBucketAccessLogging: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailBucketAccessLogging.js"),
    cloudtrailBucketDelete: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailBucketDelete.js"),
    cloudtrailDataEvents: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailDataEvents.js"),
    cloudtrailEnabled: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailEnabled.js"),
    cloudtrailEncryption: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailEncryption.js"),
    cloudtrailFileValidation: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailFileValidation.js"),
    cloudtrailObjectLock: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailObjectLock.js"),
    cloudtrailToCloudwatch: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailToCloudwatch.js"),
    cloudtrailBucketPrivate: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailBucketPrivate.js"),
    cloudtrailDeliveryFailing: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailDeliveryFailing.js"),
    cloudtrailManagementEvents: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailManagementEvents.js"),
    cloudtrailS3Bucket: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailS3Bucket.js"),
    globalLoggingDuplicated: require(__dirname +
      "/plugins/aws/cloudtrail/globalLoggingDuplicated.js"),
    cloudtrailNotificationsEnabled: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailNotificationsEnabled.js"),
    cloudtrailHasTags: require(__dirname +
      "/plugins/aws/cloudtrail/cloudtrailHasTags.js"),

    ec2InstancesOptimized: require(__dirname +
      "/plugins/aws/computeoptimizer/ec2InstancesOptimized.js"),
    lambdaFunctionsOptimized: require(__dirname +
      "/plugins/aws/computeoptimizer/lambdaFunctionsOptimized.js"),
    optimizerRecommendationsEnabled: require(__dirname +
      "/plugins/aws/computeoptimizer/optimizerRecommendationsEnabled.js"),
    ebsVolumesOptimized: require(__dirname +
      "/plugins/aws/computeoptimizer/ebsVolumesOptimized.js"),
    asgOptimized: require(__dirname +
      "/plugins/aws/computeoptimizer/asgOptimized.js"),

    configServiceEnabled: require(__dirname +
      "/plugins/aws/configservice/configServiceEnabled.js"),
    configComplaintRules: require(__dirname +
      "/plugins/aws/configservice/configComplaintRules.js"),
    configDeliveryFailing: require(__dirname +
      "/plugins/aws/configservice/configDeliveryFailing.js"),
    configServiceMissingBucket: require(__dirname +
      "/plugins/aws/configservice/configServiceMissingBucket.js"),
    servicesInUse: require(__dirname +
      "/plugins/aws/configservice/servicesInUse.js"),

    devOpsGuruNotificationEnabled: require(__dirname +
      "/plugins/aws/devopsguru/devOpsGuruNotificationEnabled.js"),

    dmsEncryptionEnabled: require(__dirname +
      "/plugins/aws/dms/dmsEncryptionEnabled.js"),
    dmsPubliclyAccessibleInstances: require(__dirname +
      "/plugins/aws/dms/dmsPubliclyAccessibleInstances.js"),
    dmsMultiAZFeatureEnabled: require(__dirname +
      "/plugins/aws/dms/dmsMultiAZFeatureEnabled.js"),
    autoMinorVersionUpgrade: require(__dirname +
      "/plugins/aws/dms/autoMinorVersionUpgrade.js"),

    dynamoKmsEncryption: require(__dirname +
      "/plugins/aws/dynamodb/dynamoKmsEncryption.js"),
    daxClusterEncryption: require(__dirname +
      "/plugins/aws/dynamodb/daxClusterEncryption.js"),
    dynamoContinuousBackups: require(__dirname +
      "/plugins/aws/dynamodb/dynamoContinuousBackups.js"),
    dynamoTableBackupExists: require(__dirname +
      "/plugins/aws/dynamodb/dynamoTableBackupExists.js"),
    dynamoTableHasTags: require(__dirname +
      "/plugins/aws/dynamodb/dynamoTableHasTags.js"),

    enhancedMetadataEnabled: require(__dirname +
      "/plugins/aws/imagebuilder/enhancedMetadataEnabled.js"),

    instanceLimit: require(__dirname + "/plugins/aws/ec2/instanceLimit.js"),
    instanceVcpusLimit: require(__dirname +
      "/plugins/aws/ec2/instanceVcpusLimit.js"),
    instanceMaxCount: require(__dirname +
      "/plugins/aws/ec2/instanceMaxCount.js"),
    instanceKeyBasedLogin: require(__dirname +
      "/plugins/aws/ec2/instanceKeyBasedLogin.js"),
    openAllPortsProtocols: require(__dirname +
      "/plugins/aws/ec2/openAllPortsProtocols.js"),
    openCIFS: require(__dirname + "/plugins/aws/ec2/openCIFS.js"),
    openCustomPorts: require(__dirname + "/plugins/aws/ec2/openCustomPorts.js"),
    openDNS: require(__dirname + "/plugins/aws/ec2/openDNS.js"),
    openDocker: require(__dirname + "/plugins/aws/ec2/openDocker.js"),
    openFTP: require(__dirname + "/plugins/aws/ec2/openFTP.js"),
    openHadoopNameNode: require(__dirname +
      "/plugins/aws/ec2/openHadoopNameNode.js"),
    openHadoopNameNodeWebUI: require(__dirname +
      "/plugins/aws/ec2/openHadoopNameNodeWebUI.js"),
    openOracleAutoDataWarehouse: require(__dirname +
      "/plugins/aws/ec2/openOracleAutoDataWarehouse.js"),
    openKibana: require(__dirname + "/plugins/aws/ec2/openKibana.js"),
    openMySQL: require(__dirname + "/plugins/aws/ec2/openMySQL.js"),
    openOracle: require(__dirname + "/plugins/aws/ec2/openOracle.js"),
    openNetBIOS: require(__dirname + "/plugins/aws/ec2/openNetBIOS.js"),
    openPostgreSQL: require(__dirname + "/plugins/aws/ec2/openPostgreSQL.js"),
    openRDP: require(__dirname + "/plugins/aws/ec2/openRDP.js"),
    openRPC: require(__dirname + "/plugins/aws/ec2/openRPC.js"),
    openSalt: require(__dirname + "/plugins/aws/ec2/openSalt.js"),
    openSMBoTCP: require(__dirname + "/plugins/aws/ec2/openSMBoTCP.js"),
    openSMTP: require(__dirname + "/plugins/aws/ec2/openSMTP.js"),
    openSQLServer: require(__dirname + "/plugins/aws/ec2/openSQLServer.js"),
    openSSH: require(__dirname + "/plugins/aws/ec2/openSSH.js"),
    openTelnet: require(__dirname + "/plugins/aws/ec2/openTelnet.js"),
    openVNCClient: require(__dirname + "/plugins/aws/ec2/openVNCClient.js"),
    openVNCServer: require(__dirname + "/plugins/aws/ec2/openVNCServer.js"),
    openElasticsearch: require(__dirname +
      "/plugins/aws/ec2/openElasticsearch.js"),
    openMongoDB: require(__dirname + "/plugins/aws/ec2/openMongoDB.js"),
    openCassandraClient: require(__dirname +
      "/plugins/aws/ec2/openCassandraClient.js"),
    openCassandraInternode: require(__dirname +
      "/plugins/aws/ec2/openCassandraInternode.js"),
    openCassandraMonitoring: require(__dirname +
      "/plugins/aws/ec2/openCassandraMonitoring.js"),
    openCassandraThrift: require(__dirname +
      "/plugins/aws/ec2/openCassandraThrift.js"),
    openLDAP: require(__dirname + "/plugins/aws/ec2/openLDAP.js"),
    openLDAPS: require(__dirname + "/plugins/aws/ec2/openLDAPS.js"),
    openSNMP: require(__dirname + "/plugins/aws/ec2/openSNMP.js"),
    openMemcached: require(__dirname + "/plugins/aws/ec2/openMemcached.js"),
    openInternalWeb: require(__dirname + "/plugins/aws/ec2/openInternalWeb.js"),
    openRedis: require(__dirname + "/plugins/aws/ec2/openRedis.js"),
    vpcElasticIpLimit: require(__dirname +
      "/plugins/aws/ec2/vpcElasticIpLimit.js"),
    classicInstances: require(__dirname +
      "/plugins/aws/ec2/classicInstances.js"),
    flowLogsEnabled: require(__dirname + "/plugins/aws/ec2/flowLogsEnabled.js"),
    vpcMultipleSubnets: require(__dirname +
      "/plugins/aws/ec2/multipleSubnets.js"),
    overlappingSecurityGroups: require(__dirname +
      "/plugins/aws/ec2/overlappingSecurityGroups.js"),
    publicAmi: require(__dirname + "/plugins/aws/ec2/publicAmi.js"),
    encryptedAmi: require(__dirname + "/plugins/aws/ec2/encryptedAmi.js"),
    amiHasTags: require(__dirname + "/plugins/aws/ec2/amiHasTags.js"),
    instanceIamRole: require(__dirname + "/plugins/aws/ec2/instanceIamRole.js"),
    ebsBackupEnabled: require(__dirname +
      "/plugins/aws/ec2/ebsBackupEnabled.js"),
    ebsEncryptionEnabled: require(__dirname +
      "/plugins/aws/ec2/ebsEncryptionEnabled.js"),
    ebsSnapshotLifecycle: require(__dirname +
      "/plugins/aws/ec2/ebsSnapshotLifecycle.js"),
    ebsOldSnapshots: require(__dirname + "/plugins/aws/ec2/ebsOldSnapshots.js"),
    ebsSnapshotPrivate: require(__dirname +
      "/plugins/aws/ec2/ebsSnapshotPrivate.js"),
    ebsSnapshotPublic: require(__dirname +
      "/plugins/aws/ec2/ebsSnapshotPublic.js"),
    unusedSecurityGroups: require(__dirname +
      "/plugins/aws/ec2/unusedSecurityGroups.js"),
    natMultiAz: require(__dirname + "/plugins/aws/ec2/natMultiAz.js"),
    defaultVpcInUse: require(__dirname + "/plugins/aws/ec2/defaultVpcInUse.js"),
    defaultVpcExists: require(__dirname +
      "/plugins/aws/ec2/defaultVpcExists.js"),
    crossVpcPublicPrivate: require(__dirname +
      "/plugins/aws/ec2/crossVpcPublicPrivate.js"),
    vpcEndpointAcceptance: require(__dirname +
      "/plugins/aws/ec2/vpcEndpointAcceptance"),
    vpcEndpointExposed: require(__dirname +
      "/plugins/aws/ec2/vpcEndpointExposed.js"),
    vpcEndpointCrossAccount: require(__dirname +
      "/plugins/aws/ec2/vpcEndpointCrossAccount.js"),
    vpcPeeringConnections: require(__dirname +
      "/plugins/aws/ec2/vpcPeeringConnections.js"),
    ebsEncryptedSnapshots: require(__dirname +
      "/plugins/aws/ec2/ebsEncryptedSnapshots.js"),
    ebsDefaultEncryptionEnabled: require(__dirname +
      "/plugins/aws/ec2/ebsDefaultEncryptionEnabled.js"),
    ec2MetadataOptions: require(__dirname +
      "/plugins/aws/ec2/ec2MetadataOptions.js"),
    unusedEni: require(__dirname + "/plugins/aws/ec2/unusedEni.js"),
    unusedAmi: require(__dirname + "/plugins/aws/ec2/unusedAmi.js"),
    unusedVpcInternetGateways: require(__dirname +
      "/plugins/aws/ec2/unusedVpcInternetGateways.js"),
    managedNatGateway: require(__dirname +
      "/plugins/aws/ec2/managedNatGateway.js"),
    allowedCustomPorts: require(__dirname +
      "/plugins/aws/ec2/allowedCustomPorts.js"),
    ebsUnusedVolumes: require(__dirname +
      "/plugins/aws/ec2/ebsUnusedVolumes.js"),
    publicIpAddress: require(__dirname + "/plugins/aws/ec2/publicIpAddress.js"),
    unusedVirtualPrivateGateway: require(__dirname +
      "/plugins/aws/ec2/unusedVirtualPrivateGateway.js"),
    vpcSubnetInstancesPresent: require(__dirname +
      "/plugins/aws/ec2/vpcSubnetInstancesPresent.js"),
    webTierInstanceIamRole: require(__dirname +
      "/plugins/aws/ec2/webTierInstanceIamRole.js"),
    vpnTunnelState: require(__dirname + "/plugins/aws/ec2/vpnTunnelState.js"),
    networkAclOutboundTraffic: require(__dirname +
      "/plugins/aws/ec2/networkAclOutboundTraffic.js"),
    outdatedAmiInUse: require(__dirname +
      "/plugins/aws/ec2/outdatedAmiInUse.js"),
    appTierInstanceIamRole: require(__dirname +
      "/plugins/aws/ec2/appTierInstanceIamRole.js"),
    defaultSecurityGroup: require(__dirname +
      "/plugins/aws/ec2/defaultSecurityGroup.js"),
    launchWizardSecurityGroups: require(__dirname +
      "/plugins/aws/ec2/launchWizardSecurityGroups"),
    securityGroupRfc1918: require(__dirname +
      "/plugins/aws/ec2/securityGroupRfc1918.js"),
    elasticIpLimit: require(__dirname + "/plugins/aws/ec2/elasticIpLimit.js"),
    unassociatedElasticIp: require(__dirname +
      "/plugins/aws/ec2/unassociatedElasticIp.js"),
    subnetIpAvailability: require(__dirname +
      "/plugins/aws/ec2/subnetIpAvailability.js"),
    excessiveSecurityGroups: require(__dirname +
      "/plugins/aws/ec2/excessiveSecurityGroups.js"),
    vpnGatewayInVpc: require(__dirname + "/plugins/aws/ec2/vpnGatewayInVpc.js"),
    internetGatewayInVpc: require(__dirname +
      "/plugins/aws/ec2/internetGatewayInVpc.js"),
    enableDetailedMonitoring: require(__dirname +
      "/plugins/aws/ec2/enableDetailedMonitoring.js"),
    ec2HasTags: require(__dirname + "/plugins/aws/ec2/ec2HasTags.js"),
    securityGroupHasTags: require(__dirname +
      "/plugins/aws/ec2/securityGroupsHasTags.js"),
    vpcHasTags: require(__dirname + "/plugins/aws/ec2/vpcHasTags"),
    ebsSnapshotHasTags: require(__dirname +
      "/plugins/aws/ec2/ebsSnapshotHasTags.js"),
    networkAclHasTags: require(__dirname +
      "/plugins/aws/ec2/networkAclHasTags.js"),
    ebsVolumeHasTags: require(__dirname +
      "/plugins/aws/ec2/ebsVolumeHasTags.js"),

    efsCmkEncrypted: require(__dirname + "/plugins/aws/efs/efsCmkEncrypted.js"),
    efsEncryptionEnabled: require(__dirname +
      "/plugins/aws/efs/efsEncryptionEnabled.js"),
    efsHasTags: require(__dirname + "/plugins/aws/efs/efsHasTags.js"),

    dockerfileTemplateEncrypted: require(__dirname +
      "/plugins/aws/imagebuilder/dockerfileTemplateEncrypted.js"),

    ecrRepositoryPolicy: require(__dirname +
      "/plugins/aws/ecr/ecrRepositoryPolicy.js"),
    ecrRepositoryEncrypted: require(__dirname +
      "/plugins/aws/ecr/ecrRepositoryEncrypted.js"),
    ecrRepositoryTagImmutability: require(__dirname +
      "/plugins/aws/ecr/ecrRepositoryTagImmutability.js"),

    managedPlatformUpdates: require(__dirname +
      "/plugins/aws/elasticbeanstalk/managedPlatformUpdates.js"),
    enhancedHealthReporting: require(__dirname +
      "/plugins/aws/elasticbeanstalk/enhancedHealthReporting.js"),
    environmentAccessLogs: require(__dirname +
      "/plugins/aws/elasticbeanstalk/environmentAccessLogs.js"),
    environmentPersistentLogs: require(__dirname +
      "/plugins/aws/elasticbeanstalk/environmentPersistentLogs.js"),

    eksKubernetesVersion: require(__dirname +
      "/plugins/aws/eks/eksKubernetesVersion.js"),
    eksLoggingEnabled: require(__dirname +
      "/plugins/aws/eks/eksLoggingEnabled.js"),
    eksPrivateEndpoint: require(__dirname +
      "/plugins/aws/eks/eksPrivateEndpoint.js"),
    eksSecretsEncrypted: require(__dirname +
      "/plugins/aws/eks/eksSecretsEncrypted.js"),
    eksSecurityGroups: require(__dirname +
      "/plugins/aws/eks/eksSecurityGroups.js"),
    eksLatestPlatformVersion: require(__dirname +
      "/plugins/aws/eks/eksLatestPlatformVersion.js"),
    eksClusterHasTags: require(__dirname +
      "/plugins/aws/eks/eksClusterHasTags.js"),

    kendraIndexEncrypted: require(__dirname +
      "/plugins/aws/kendra/kendraIndexEncrypted.js"),

    environmentTemplateEncrypted: require(__dirname +
      "/plugins/aws/proton/environmentTemplateEncrypted.js"),

    crosszoneLoadBalancing: require(__dirname +
      "/plugins/aws/elb/crosszoneLoadBalancing.js"),
    insecureCiphers: require(__dirname + "/plugins/aws/elb/insecureCiphers.js"),
    elbHttpsOnly: require(__dirname + "/plugins/aws/elb/elbHttpsOnly.js"),
    elbLoggingEnabled: require(__dirname +
      "/plugins/aws/elb/elbLoggingEnabled.js"),
    elbNoInstances: require(__dirname + "/plugins/aws/elb/elbNoInstances.js"),
    classicELBInUse: require(__dirname + "/plugins/aws/elb/classicELBInUse.js"),
    connectionDrainingEnabled: require(__dirname +
      "/plugins/aws/elb/connectionDrainingEnabled.js"),
    appTierElbSecurity: require(__dirname +
      "/plugins/aws/elb/appTierElbSecurity.js"),
    elbHasTags: require(__dirname + "/plugins/aws/elb/elbHasTags.js"),

    elbv2DeletionProtection: require(__dirname +
      "/plugins/aws/elbv2/elbv2DeletionProtection.js"),
    elbv2LoggingEnabled: require(__dirname +
      "/plugins/aws/elbv2/elbv2LoggingEnabled.js"),
    elbv2HttpsOnly: require(__dirname + "/plugins/aws/elbv2/elbv2HttpsOnly.js"),
    elbv2NoInstances: require(__dirname +
      "/plugins/aws/elbv2/elbv2NoInstances.js"),
    elbv2WafEnabled: require(__dirname +
      "/plugins/aws/elbv2/elbv2WafEnabled.js"),
    elbv2MinimumTargetInstances: require(__dirname +
      "/plugins/aws/elbv2/elbv2MinimumTargetInstances.js"),
    elbv2NlbListenerSecurity: require(__dirname +
      "/plugins/aws/elbv2/elbv2NlbListenerSecurity.js"),
    elbv2DeregistrationDelay: require(__dirname +
      "/plugins/aws/elbv2/elbv2DeregistrationDelay.js"),
    elbv2SslTermination: require(__dirname +
      "/plugins/aws/elbv2/elbv2SslTermination.js"),
    elbv2HasTags: require(__dirname + "/plugins/aws/elbv2/elbv2HasTags.js"),

    elasticacheDefaultPorts: require(__dirname +
      "/plugins/aws/elasticache/elasticacheDefaultPorts.js"),

    emrClusterLogging: require(__dirname +
      "/plugins/aws/emr/emrClusterLogging.js"),
    emrClusterInVPC: require(__dirname + "/plugins/aws/emr/emrClusterInVPC.js"),
    emrEncryptionInTransit: require(__dirname +
      "/plugins/aws/emr/emrEncryptionInTransit.js"),
    emrEncryptionAtRest: require(__dirname +
      "/plugins/aws/emr/emrEncryptionAtRest.js"),
    emrDesiredInstanceType: require(__dirname +
      "/plugins/aws/emr/emrDesiredInstanceType.js"),
    emrInstanceCount: require(__dirname +
      "/plugins/aws/emr/emrInstanceCount.js"),

    esAccessFromIps: require(__dirname + "/plugins/aws/es/esAccessFromIps.js"),
    esPublicEndpoint: require(__dirname +
      "/plugins/aws/es/esPublicEndpoint.js"),
    esRequireIAMAuth: require(__dirname +
      "/plugins/aws/es/esRequireIAMAuth.js"),
    esEncryptedDomain: require(__dirname +
      "/plugins/aws/es/esEncryptedDomain.js"),
    esExposedDomain: require(__dirname + "/plugins/aws/es/esExposedDomain.js"),
    esNodeToNodeEncryption: require(__dirname +
      "/plugins/aws/es/esNodeToNodeEncryption.js"),
    esLoggingEnabled: require(__dirname +
      "/plugins/aws/es/esLoggingEnabled.js"),
    esUpgradeAvailable: require(__dirname +
      "/plugins/aws/es/esUpgradeAvailable.js"),
    esHttpsOnly: require(__dirname + "/plugins/aws/es/esHttpsOnly.js"),
    esCrossAccountAccess: require(__dirname +
      "/plugins/aws/es/esCrossAccountAccess.js"),
    esClusterStatus: require(__dirname + "/plugins/aws/es/esClusterStatus.js"),
    esDedicatedMasterEnabled: require(__dirname +
      "/plugins/aws/es/esDedicatedMasterEnabled.js"),
    esDesiredInstanceTypes: require(__dirname +
      "/plugins/aws/es/esDesiredInstanceTypes.js"),
    esTlsVersion: require(__dirname + "/plugins/aws/es/esTlsVersion.js"),
    esDomainEncryptionEnabled: require(__dirname +
      "/plugins/aws/es/esDomainEncryptionEnabled.js"),
    vaultPublicAccess: require(__dirname +
      "/plugins/aws/s3glacier/vaultPublicAccess.js"),
    firehoseEncrypted: require(__dirname +
      "/plugins/aws/firehose/firehoseEncrypted.js"),
    deliveryStreamEncrypted: require(__dirname +
      "/plugins/aws/firehose/deliveryStreamEncrypted.js"),

    eventBusCrossAccountAccess: require(__dirname +
      "/plugins/aws/eventbridge/eventBusCrossAccountAccess.js"),
    eventBusPublicAccess: require(__dirname +
      "/plugins/aws/eventbridge/eventBusPublicAccess.js"),
    eventsInUse: require(__dirname + "/plugins/aws/eventbridge/eventsInUse.js"),

    glueCloudwatchLogsEncrypted: require(__dirname +
      "/plugins/aws/glue/glueCloudwatchLogsEncrypted.js"),
    glueS3EncryptionEnabled: require(__dirname +
      "/plugins/aws/glue/glueS3EncryptionEnabled.js"),
    dataCatalogCmkEncrypted: require(__dirname +
      "/plugins/aws/glue/dataCatalogCmkEncrypted.js"),
    bookmarkEncryptionEnabled: require(__dirname +
      "/plugins/aws/glue/bookmarkEncryptionEnabled.js"),
    dataCatalogEncryptionEnabled: require(__dirname +
      "/plugins/aws/glue/dataCatalogEncryptionEnabled.js"),

    imageRecipeVolumeEncrypted: require(__dirname +
      "/plugins/aws/imagebuilder/imageRecipeVolumeEncrypted.js"),
    imgBuilderComponentsEncrypted: require(__dirname +
      "/plugins/aws/imagebuilder/imgBuilderComponentsEncrypted.js"),

    accessKeysExtra: require(__dirname + "/plugins/aws/iam/accessKeysExtra.js"),
    accessKeysLastUsed: require(__dirname +
      "/plugins/aws/iam/accessKeysLastUsed.js"),
    accessKeysRotated: require(__dirname +
      "/plugins/aws/iam/accessKeysRotated.js"),
    certificateExpiry: require(__dirname +
      "/plugins/aws/iam/certificateExpiry.js"),
    crossAccountMfaExtIdAccess: require(__dirname +
      "/plugins/aws/iam/crossAccountMfaExtIdAccess.js"),
    emptyGroups: require(__dirname + "/plugins/aws/iam/emptyGroups.js"),
    groupInlinePolicies: require(__dirname +
      "/plugins/aws/iam/groupInlinePolicies.js"),
    iamMasterManagerRoles: require(__dirname +
      "/plugins/aws/iam/iamMasterManagerRoles.js"),
    iamUserAdmins: require(__dirname + "/plugins/aws/iam/iamUserAdmins.js"),
    iamUserNameRegex: require(__dirname +
      "/plugins/aws/iam/iamUserNameRegex.js"),
    iamUserUnauthorizedToEdit: require(__dirname +
      "/plugins/aws/iam/iamUserUnauthorizedToEdit"),
    iamUserHasTags: require(__dirname + "/plugins/aws/iam/iamUserHasTags.js"),
    iamRolePolicies: require(__dirname + "/plugins/aws/iam/iamRolePolicies.js"),
    iamRoleLastUsed: require(__dirname + "/plugins/aws/iam/iamRoleLastUsed.js"),
    maxPasswordAge: require(__dirname + "/plugins/aws/iam/maxPasswordAge.js"),
    minPasswordLength: require(__dirname +
      "/plugins/aws/iam/minPasswordLength.js"),
    noUserIamPolicies: require(__dirname +
      "/plugins/aws/iam/noUserIamPolicies.js"),
    passwordExpiration: require(__dirname +
      "/plugins/aws/iam/passwordExpiration.js"),
    passwordRequiresLowercase: require(__dirname +
      "/plugins/aws/iam/passwordRequiresLowercase.js"),
    passwordRequiresNumbers: require(__dirname +
      "/plugins/aws/iam/passwordRequiresNumbers.js"),
    passwordRequiresSymbols: require(__dirname +
      "/plugins/aws/iam/passwordRequiresSymbols.js"),
    passwordRequiresUppercase: require(__dirname +
      "/plugins/aws/iam/passwordRequiresUppercase.js"),
    passwordReusePrevention: require(__dirname +
      "/plugins/aws/iam/passwordReusePrevention.js"),
    rootAccessKeys: require(__dirname + "/plugins/aws/iam/rootAccessKeys.js"),
    rootSigningCertificate: require(__dirname +
      "/plugins/aws/iam/rootSigningCertificate.js"),
    rootAccountInUse: require(__dirname +
      "/plugins/aws/iam/rootAccountInUse.js"),
    rootHardwareMfa: require(__dirname + "/plugins/aws/iam/rootHardwareMfa.js"),
    rootMfaEnabled: require(__dirname + "/plugins/aws/iam/rootMfaEnabled.js"),
    sshKeysRotated: require(__dirname + "/plugins/aws/iam/sshKeysRotated.js"),
    trustedCrossAccountRoles: require(__dirname +
      "/plugins/aws/iam/trustedCrossAccountRoles.js"),
    usersMfaEnabled: require(__dirname + "/plugins/aws/iam/usersMfaEnabled.js"),
    usersPasswordAndKeys: require(__dirname +
      "/plugins/aws/iam/usersPasswordAndKeys.js"),
    usersPasswordLastUsed: require(__dirname +
      "/plugins/aws/iam/usersPasswordLastUsed.js"),
    canaryKeysUsed: require(__dirname + "/plugins/aws/iam/canaryKeysUsed.js"),
    iamPoliciesPresent: require(__dirname +
      "/plugins/aws/iam/iamPoliciesPresent.js"),
    iamDbAuthenticationEnabled: require(__dirname +
      "/plugins/aws/rds/iamDbAuthenticationEnabled.js"),
    iamSupportPolicy: require(__dirname +
      "/plugins/aws/iam/iamSupportPolicy.js"),
    iamUserPresent: require(__dirname + "/plugins/aws/iam/iamUserPresent.js"),
    rolePolicyUnusedServices: require(__dirname +
      "/plugins/aws/iam/rolePolicyUnusedServices.js"),
    iamUserInUse: require(__dirname + "/plugins/aws/iam/iamUserInUse.js"),
    policyAllowsToChangePassword: require(__dirname +
      "/plugins/aws/iam/policyAllowsToChangePassword.js"),
    iamRoleHasTags: require(__dirname + "/plugins/aws/iam/iamRoleHasTags.js"),

    kinesisEncrypted: require(__dirname +
      "/plugins/aws/kinesis/kinesisEncrypted.js"),
    kinesisDataStreamsEncrypted: require(__dirname +
      "/plugins/aws/kinesis/kinesisDataStreamsEncrypted.js"),
    videostreamDataEncrypted: require(__dirname +
      "/plugins/aws/kinesisvideo/videostreamDataEncrypted.js"),

    kmsKeyRotation: require(__dirname + "/plugins/aws/kms/kmsKeyRotation.js"),
    kmsScheduledDeletion: require(__dirname +
      "/plugins/aws/kms/kmsScheduledDeletion.js"),
    kmsKeyPolicy: require(__dirname + "/plugins/aws/kms/kmsKeyPolicy.js"),
    kmsDefaultKeyUsage: require(__dirname +
      "/plugins/aws/kms/kmsDefaultKeyUsage.js"),
    kmsAppTierCmk: require(__dirname + "/plugins/aws/kms/kmsAppTierCmk.js"),
    kmsGrantLeastPrivilege: require(__dirname +
      "/plugins/aws/kms/kmsGrantLeastPrivilege.js"),
    kmsDuplicateGrants: require(__dirname +
      "/plugins/aws/kms/kmsDuplicateGrants.js"),

    rdsAutomatedBackups: require(__dirname +
      "/plugins/aws/rds/rdsAutomatedBackups.js"),
    rdsEncryptionEnabled: require(__dirname +
      "/plugins/aws/rds/rdsEncryptionEnabled.js"),
    rdsCmkEncryptionEnabled: require(__dirname +
      "/plugins/aws/rds/rdsCmkEncryptionEnabled.js"),
    rdsLoggingEnabled: require(__dirname +
      "/plugins/aws/rds/rdsLoggingEnabled.js"),
    rdsPubliclyAccessible: require(__dirname +
      "/plugins/aws/rds/rdsPubliclyAccessible.js"),
    rdsRestorable: require(__dirname + "/plugins/aws/rds/rdsRestorable.js"),
    rdsMultiAz: require(__dirname + "/plugins/aws/rds/rdsMultiAz.js"),
    rdsSnapshotEncryption: require(__dirname +
      "/plugins/aws/rds/rdsSnapshotEncryption.js"),
    rdsMinorVersionUpgrade: require(__dirname +
      "/plugins/aws/rds/rdsMinorVersionUpgrade.js"),
    sqlServerTLSVersion: require(__dirname +
      "/plugins/aws/rds/sqlServerTLSVersion"),
    rdsTransportEncryption: require(__dirname +
      "/plugins/aws/rds/rdsTransportEncryption"),
    rdsDeletionProtectionEnabled: require(__dirname +
      "/plugins/aws/rds/rdsDeletionProtectionEnabled.js"),
    rdsSnapshotPubliclyAccessible: require(__dirname +
      "/plugins/aws/rds/rdsSnapshotPubliclyAccessible.js"),
    rdsInstanceHasTags: require(__dirname +
      "/plugins/aws/rds/rdsInstanceHasTags.js"),

    redisClusterEncryptionInTransit: require(__dirname +
      "/plugins/aws/elasticache/redisClusterEncryptionInTransit.js"),
    elasticacheClusterInVpc: require(__dirname +
      "/plugins/aws/elasticache/elasticacheClusterInVpc.js"),
    elasticacheInstanceGeneration: require(__dirname +
      "/plugins/aws/elasticache/elasticacheInstanceGeneration.js"),
    redisEngineVersions: require(__dirname +
      "/plugins/aws/elasticache/redisEngineVersions.js"),
    elasticacheNodesCount: require(__dirname +
      "/plugins/aws/elasticache/elasticacheNodesCount.js"),
    elasticacheRedisMultiAZ: require(__dirname +
      "/plugins/aws/elasticache/elasticacheRedisMultiAZ.js"),
    idleElastiCacheNode: require(__dirname +
      "/plugins/aws/elasticache/idleElastiCacheNode.js"),
    elasticaheDesiredNodeType: require(__dirname +
      "/plugins/aws/elasticache/elasticaheDesiredNodeType.js"),
    elastiCacheClusterHasTags: require(__dirname +
      "/plugins/aws/elasticache/elasticCacheClusterHasTags.js"),

    domainAutoRenew: require(__dirname +
      "/plugins/aws/route53/domainAutoRenew.js"),
    domainExpiry: require(__dirname + "/plugins/aws/route53/domainExpiry.js"),
    domainTransferLock: require(__dirname +
      "/plugins/aws/route53/domainTransferLock.js"),
    danglingDnsRecords: require(__dirname +
      "/plugins/aws/route53/danglingDnsRecords.js"),
    privacyProtection: require(__dirname +
      "/plugins/aws/route53/privacyProtection.js"),
    senderPolicyFwInUse: require(__dirname +
      "/plugins/aws/route53/senderPolicyFwInUse.js"),
    senderPolicyFwRecordPresent: require(__dirname +
      "/plugins/aws/route53/senderPolicyFwRecordPresent.js"),

    bucketEncryptionInTransit: require(__dirname +
      "/plugins/aws/s3/bucketEncryptionInTransit.js"),
    bucketAllUsersPolicy: require(__dirname +
      "/plugins/aws/s3/bucketAllUsersPolicy.js"),
    bucketAllUsersAcl: require(__dirname +
      "/plugins/aws/s3/bucketAllUsersAcl.js"),
    bucketPolicyCloudFrontOai: require(__dirname +
      "/plugins/aws/s3/bucketPolicyCloudFrontOai.js"),
    bucketVersioning: require(__dirname +
      "/plugins/aws/s3/bucketVersioning.js"),
    bucketLogging: require(__dirname + "/plugins/aws/s3/bucketLogging.js"),
    s3Encryption: require(__dirname + "/plugins/aws/s3/s3Encryption.js"),
    bucketPublicAccessBlock: require(__dirname +
      "/plugins/aws/s3/bucketPublicAccessBlock.js"),
    bucketEncryption: require(__dirname +
      "/plugins/aws/s3/bucketEncryption.js"),
    bucketWebsiteEnabled: require(__dirname +
      "/plugins/aws/s3/bucketWebsiteEnabled.js"),
    bucketEnforceEncryption: require(__dirname +
      "/plugins/aws/s3/bucketEnforceEncryption.js"),
    bucketSecureTransportEnabled: require(__dirname +
      "/plugins/aws/s3/bucketSecureTransportEnabled.js"),
    bucketLifecycleConfiguration: require(__dirname +
      "/plugins/aws/s3/bucketLifecycleConfiguration"),
    bucketTransferAcceleration: require(__dirname +
      "/plugins/aws/s3/bucketTransferAcceleration"),
    bucketDnsCompliantName: require(__dirname +
      "/plugins/aws/s3/bucketDnsCompliantName.js"),
    versionedBucketsLC: require(__dirname +
      "/plugins/aws/s3/versionedBucketsLC.js"),
    s3BucketHasTags: require(__dirname + "/plugins/aws/s3/s3BucketHasTags.js"),

    notebookDataEncrypted: require(__dirname +
      "/plugins/aws/sagemaker/notebookDataEncrypted.js"),
    notebookDirectInternetAccess: require(__dirname +
      "/plugins/aws/sagemaker/notebookDirectInternetAccess.js"),
    notebookInstanceInVpc: require(__dirname +
      "/plugins/aws/sagemaker/notebookInstanceInVpc.js"),

    dkimEnabled: require(__dirname + "/plugins/aws/ses/dkimEnabled.js"),
    emailMessagesEncrypted: require(__dirname +
      "/plugins/aws/ses/emailMessagesEncrypted.js"),

    topicEncrypted: require(__dirname + "/plugins/aws/sns/topicEncrypted.js"),
    topicPolicies: require(__dirname + "/plugins/aws/sns/topicPolicies.js"),
    topicCmkEncrypted: require(__dirname +
      "/plugins/aws/sns/topicCmkEncrypted.js"),
    snsCrossAccount: require(__dirname + "/plugins/aws/sns/snsCrossAccount.js"),
    snsValidSubscribers: require(__dirname +
      "/plugins/aws/sns/snsValidSubscribers.js"),

    sqsCrossAccount: require(__dirname + "/plugins/aws/sqs/sqsCrossAccount.js"),
    sqsDeadLetterQueue: require(__dirname +
      "/plugins/aws/sqs/sqsDeadLetterQueue.js"),
    sqsEncrypted: require(__dirname + "/plugins/aws/sqs/sqsEncrypted.js"),
    sqsPublicAccess: require(__dirname + "/plugins/aws/sqs/sqsPublicAccess.js"),
    queueUnprocessedMessages: require(__dirname +
      "/plugins/aws/sqs/queueUnprocessedMessages.js"),
    sqsEncryptionEnabled: require(__dirname +
      "/plugins/aws/sqs/sqsEncryptionEnabled.js"),

    ssmEncryptedParameters: require(__dirname +
      "/plugins/aws/ssm/ssmEncryptedParameters.js"),
    ssmActiveOnAllInstances: require(__dirname +
      "/plugins/aws/ssm/ssmActiveOnAllInstances.js"),
    ssmAgentLatestVersion: require(__dirname +
      "/plugins/aws/ssm/ssmAgentLatestVersion.js"),
    ssmAgentAutoUpdateEnabled: require(__dirname +
      "/plugins/aws/ssm/ssmAgentAutoUpdateEnabled"),
    ssmDocumentPublicAccess: require(__dirname +
      "/plugins/aws/ssm/ssmDocumentPublicAccess"),
    ssmManagedInstances: require(__dirname +
      "/plugins/aws/ssm/ssmManagedInstances"),
    ssmSessionDuration: require(__dirname +
      "/plugins/aws/ssm/ssmSessionDuration"),

    ledgerEncrypted: require(__dirname + "/plugins/aws/qldb/ledgerEncrypted"),

    lambdaAdminPrivileges: require(__dirname +
      "/plugins/aws/lambda/lambdaAdminPrivileges.js"),
    envVarsClientSideEncryption: require(__dirname +
      "/plugins/aws/lambda/envVarsClientSideEncryption.js"),
    lambdaOldRuntimes: require(__dirname +
      "/plugins/aws/lambda/lambdaOldRuntimes.js"),
    lambdaVpcConfig: require(__dirname +
      "/plugins/aws/lambda/lambdaVpcConfig.js"),
    lambdaPublicAccess: require(__dirname +
      "/plugins/aws/lambda/lambdaPublicAccess.js"),
    lambdaLogGroups: require(__dirname +
      "/plugins/aws/lambda/lambdaLogGroups.js"),
    lambdaTracingEnabled: require(__dirname +
      "/plugins/aws/lambda/lambdaTracingEnabled.js"),
    lambdaHasTags: require(__dirname + "/plugins/aws/lambda/lambdaHasTags.js"),

    webServerPublicAccess: require(__dirname +
      "/plugins/aws/mwaa/webServerPublicAccess.js"),
    environmentAdminPrivileges: require(__dirname +
      "/plugins/aws/mwaa/environmentAdminPrivileges.js"),
    environmentDataEncrypted: require(__dirname +
      "/plugins/aws/mwaa/environmentDataEncrypted.js"),

    neptuneDBInstanceEncrypted: require(__dirname +
      "/plugins/aws/neptune/neptuneDBInstanceEncrypted.js"),

    monitoringMetrics: require(__dirname +
      "/plugins/aws/cloudwatchlogs/monitoringMetrics.js"),

    customerProfilesDomainEncrypted: require(__dirname +
      "/plugins/aws/connect/customerProfilesDomainEncrypted.js"),
    wisdomDomainEncrypted: require(__dirname +
      "/plugins/aws/connect/wisdomDomainEncrypted.js"),
    voiceIdDomainEncrypted: require(__dirname +
      "/plugins/aws/connect/voiceIdDomainEncrypted.js"),

    logRetentionPeriod: require(__dirname +
      "/plugins/aws/cloudwatchlogs/logRetentionPeriod.js"),
    logGroupsEncrypted: require(__dirname +
      "/plugins/aws/cloudwatchlogs/logGroupsEncrypted.js"),

    vpcFlowLogsMetricAlarm: require(__dirname +
      "/plugins/aws/cloudwatch/vpcFlowLogsMetricAlarm.js"),

    timestreamDatabaseEncrypted: require(__dirname +
      "/plugins/aws/timestreamwrite/timestreamDatabaseEncrypted.js"),

    mqAutoMinorVersionUpgrade: require(__dirname +
      "/plugins/aws/mq/mqAutoMinorVersionUpgrade.js"),
    mqLogExports: require(__dirname + "/plugins/aws/mq/mqLogExports.js"),
    mqDeploymentMode: require(__dirname +
      "/plugins/aws/mq/mqDeploymentMode.js"),
    mqDesiredInstanceType: require(__dirname +
      "/plugins/aws/mq/mqDesiredInstanceType.js"),
    mqBrokerEncrypted: require(__dirname +
      "/plugins/aws/mq/mqBrokerEncrypted.js"),

    memorydbClusterEncrypted: require(__dirname +
      "/plugins/aws/memorydb/memorydbClusterEncrypted.js"),

    mskClusterCBEncryption: require(__dirname +
      "/plugins/aws/msk/mskClusterCBEncryption.js"),

    mskClusterPublicAccess: require(__dirname +
      "/plugins/aws/msk/mskClusterPublicAccess.js"),
    mskClusterUnauthAccess: require(__dirname +
      "/plugins/aws/msk/mskClusterUnauthAccess.js"),
    mskClusterEncryptionAtRest: require(__dirname +
      "/plugins/aws/msk/mskClusterEncryptionAtRest.js"),
    mskClusterEncryptionInTransit: require(__dirname +
      "/plugins/aws/msk/mskClusterEncryptionInTransit.js"),

    auditLoggingEnabled: require(__dirname +
      "/plugins/aws/redshift/auditLoggingEnabled.js"),
    redshiftClusterCmkEncrypted: require(__dirname +
      "/plugins/aws/redshift/redshiftClusterCmkEncrypted.js"),
    redshiftEncryptionEnabled: require(__dirname +
      "/plugins/aws/redshift/redshiftEncryptionEnabled.js"),
    redshiftPubliclyAccessible: require(__dirname +
      "/plugins/aws/redshift/redshiftPubliclyAccessible.js"),
    redshiftAllowVersionUpgrade: require(__dirname +
      "/plugins/aws/redshift/redshiftAllowVersionUpgrade.js"),
    redshiftSSLEnabled: require(__dirname +
      "/plugins/aws/redshift/redshiftSSLEnabled.js"),
    redshiftClusterInVpc: require(__dirname +
      "/plugins/aws/redshift/redshiftClusterInVpc.js"),
    redshiftClusterDefaultPort: require(__dirname +
      "/plugins/aws/redshift/redshiftClusterDefaultPort.js"),
    redshiftClusterMasterUsername: require(__dirname +
      "/plugins/aws/redshift/redshiftClusterMasterUsername.js"),
    snapshotRetentionPeriod: require(__dirname +
      "/plugins/aws/redshift/snapshotRetentionPeriod.js"),
    userActivityLoggingEnabled: require(__dirname +
      "/plugins/aws/redshift/userActivityLoggingEnabled.js"),
    redshiftNodesCount: require(__dirname +
      "/plugins/aws/redshift/redshiftNodesCount.js"),
    redshiftUnusedReservedNodes: require(__dirname +
      "/plugins/aws/redshift/redshiftUnusedReservedNodes.js"),
    redshiftDesiredNodeType: require(__dirname +
      "/plugins/aws/redshift/redshiftDesiredNodeType.js"),

    redisClusterEncryptionAtRest: require(__dirname +
      "/plugins/aws/elasticache/redisClusterEncryptionAtRest.js"),
    "reservedNodePaymentPending.js": require(__dirname +
      "/plugins/aws/elasticache/reservedNodePaymentPending.js"),
    unusedElastiCacheReservedNode: require(__dirname +
      "/plugins/aws/elasticache/unusedElastiCacheReservedNode.js"),
    reservedNodePaymentFailed: require(__dirname +
      "/plugins/aws/elasticache/reservedNodePaymentFailed.js"),
    reservedNodeLeaseExpiration: require(__dirname +
      "/plugins/aws/elasticache/reservedNodeLeaseExpiration.js"),

    transferLoggingEnabled: require(__dirname +
      "/plugins/aws/transfer/transferLoggingEnabled.js"),
    transferPrivateLinkInUse: require(__dirname +
      "/plugins/aws/transfer/transferPrivateLinkInUse.js"),

    serviceEncrypted: require(__dirname +
      "/plugins/aws/apprunner/serviceEncrypted.js"),

    secretRotationEnabled: require(__dirname +
      "/plugins/aws/secretsmanager/secretRotationEnabled.js"),
    secretsManagerEncrypted: require(__dirname +
      "/plugins/aws/secretsmanager/secretsManagerEncrypted.js"),
    secretsManagerInUse: require(__dirname +
      "/plugins/aws/secretsmanager/secretsManagerInUse.js"),

    finspaceEnvironmentEncrypted: require(__dirname +
      "/plugins/aws/finspace/finspaceEnvironmentEncrypted.js"),

    shieldAdvancedEnabled: require(__dirname +
      "/plugins/aws/shield/shieldAdvancedEnabled.js"),
    shieldEmergencyContacts: require(__dirname +
      "/plugins/aws/shield/shieldEmergencyContacts.js"),
    shieldProtections: require(__dirname +
      "/plugins/aws/shield/shieldProtections.js"),

    enableAllFeatures: require(__dirname +
      "/plugins/aws/organizations/enableAllFeatures.js"),
    organizationInvite: require(__dirname +
      "/plugins/aws/organizations/organizationInvite.js"),

    guardDutyEnabled: require(__dirname +
      "/plugins/aws/guardduty/guarddutyEnabled.js"),
    guardDutyMaster: require(__dirname +
      "/plugins/aws/guardduty/guarddutyMaster.js"),
    noActiveFindings: require(__dirname +
      "/plugins/aws/guardduty/noActiveFindings"),
    exportedFindingsEncrypted: require(__dirname +
      "/plugins/aws/guardduty/exportedFindingsEncrypted.js"),

    workspacesVolumeEncryption: require(__dirname +
      "/plugins/aws/workspaces/workspacesVolumeEncryption.js"),
    workspacesIpAccessControl: require(__dirname +
      "/plugins/aws/workspaces/workspacesIpAccessControl.js"),
    unusedWorkspaces: require(__dirname +
      "/plugins/aws/workspaces/unusedWorkspaces.js"),
    workspacesInstanceCount: require(__dirname +
      "/plugins/aws/workspaces/workspacesInstanceCount.js"),
    workspacesDesiredBundleType: require(__dirname +
      "/plugins/aws/workspaces/workspacesDesiredBundleType.js"),

    xrayEncryptionEnabled: require(__dirname +
      "/plugins/aws/xray/xrayEncryptionEnabled.js"),

    codebuildValidSourceProviders: require(__dirname +
      "/plugins/aws/codebuild/codebuildValidSourceProviders.js"),
    projectArtifactsEncrypted: require(__dirname +
      "/plugins/aws/codebuild/projectArtifactsEncrypted.js"),

    codestarValidRepoProviders: require(__dirname +
      "/plugins/aws/codestar/codestarValidRepoProviders.js"),

    pipelineArtifactsEncrypted: require(__dirname +
      "/plugins/aws/codepipeline/pipelineArtifactsEncrypted.js"),

    dataStoreEncrypted: require(__dirname +
      "/plugins/aws/healthlake/dataStoreEncrypted.js"),

    codeartifactDomainEncrypted: require(__dirname +
      "/plugins/aws/codeartifact/codeartifactDomainEncrypted.js"),

    auditmanagerDataEncrypted: require(__dirname +
      "/plugins/aws/auditmanager/auditmanagerDataEncrypted.js"),

    flowEncrypted: require(__dirname + "/plugins/aws/appflow/flowEncrypted.js"),

    pipelineDataEncrypted: require(__dirname +
      "/plugins/aws/elastictranscoder/pipelineDataEncrypted.js"),
    jobOutputsEncrypted: require(__dirname +
      "/plugins/aws/elastictranscoder/jobOutputsEncrypted.js"),

    translateJobOutputEncrypted: require(__dirname +
      "/plugins/aws/translate/translateJobOutputEncrypted.js"),

    databrewJobOutputEncrypted: require(__dirname +
      "/plugins/aws/gluedatabrew/databrewJobOutputEncrypted.js"),

    networkMemberDataEncrypted: require(__dirname +
      "/plugins/aws/managedblockchain/networkMemberDataEncrypted.js"),

    docdbClusterEncrypted: require(__dirname +
      "/plugins/aws/documentDB/docdbClusterEncrypted.js"),
    docdbClusterBackupRetention: require(__dirname +
      "/plugins/aws/documentDB/docdbClusterBackupRetention.js"),

    instanceMediaStreamsEncrypted: require(__dirname +
      "/plugins/aws/connect/instanceMediaStreamsEncrypted.js"),
    instanceTranscriptsEncrypted: require(__dirname +
      "/plugins/aws/connect/instanceTranscriptsEncrypted.js"),
    instanceReportsEncrypted: require(__dirname +
      "/plugins/aws/connect/instanceReportsEncrypted.js"),
    instanceCallRecordingEncrypted: require(__dirname +
      "/plugins/aws/connect/instanceCallRecordingEncrypted.js"),
    instanceAttachmentsEncrypted: require(__dirname +
      "/plugins/aws/connect/instanceAttachmentsEncrypted.js"),

    backupVaultEncrypted: require(__dirname +
      "/plugins/aws/backup/backupVaultEncrypted.js"),
    backupResourceProtection: require(__dirname +
      "/plugins/aws/backup/backupResourceProtection.js"),
    backupInUseForRDSSnapshots: require(__dirname +
      "/plugins/aws/backup/backupInUseForRDSSnapshots.js"),
    backupNotificationEnabled: require(__dirname +
      "/plugins/aws/backup/backupNotificationEnabled.js"),
    backupDeletionProtection: require(__dirname +
      "/plugins/aws/backup/backupDeletionProtection.js"),
    compliantLifecyleConfigured: require(__dirname +
      "/plugins/aws/backup/compliantLifecyleConfigured.js"),

    equipmentdatasetEncrypted: require(__dirname +
      "/plugins/aws/lookout/equipmentdatasetEncrypted.js"),

    iotsitewiseDataEncrypted: require(__dirname +
      "/plugins/aws/iotsitewise/iotsitewiseDataEncrypted.js"),

    trackerDataEncrypted: require(__dirname +
      "/plugins/aws/location/trackerDataEncrypted.js"),
    geoCollectionDataEncrypted: require(__dirname +
      "/plugins/aws/location/geoCollectionDataEncrypted.js"),

    modelDataEncrypted: require(__dirname +
      "/plugins/aws/lookout/modelDataEncrypted.js"),
    anomalyDetectorEncrypted: require(__dirname +
      "/plugins/aws/lookout/anomalyDetectorEncrypted.js"),

    lexAudioLogsEncrypted: require(__dirname +
      "/plugins/aws/lex/lexAudioLogsEncrypted.js"),

    forecastDatasetEncrypted: require(__dirname +
      "/plugins/aws/forecast/forecastDatasetEncrypted.js"),
    datasetExportEncrypted: require(__dirname +
      "/plugins/aws/forecast/datasetExportEncrypted.js"),

    fsxFileSystemEncrypted: require(__dirname +
      "/plugins/aws/fsx/fsxFileSystemEncrypted.js"),

    wafv2InUse: require(__dirname + "/plugins/aws/wafv2/wafv2InUse.js"),

    wafInUse: require(__dirname + "/plugins/aws/waf/wafInUse.js"),

    fraudDetectorDataEncrypted: require(__dirname +
      "/plugins/aws/frauddetector/fraudDetectorDataEncrypted.js"),

    ecsContainerInsightsEnabled: require(__dirname +
      "/plugins/aws/ecs/ecsContainerInsightsEnabled.js"),
    ecsClustersHaveTags: require(__dirname +
      "/plugins/aws/ecs/ecsClustersHaveTags.js"),
  },
  azure: {
    fileServiceEncryption: require(__dirname +
      "/plugins/azure/storageaccounts/fileServiceEncryption.js"),
    networkAccessDefaultAction: require(__dirname +
      "/plugins/azure/storageaccounts/networkAccessDefaultAction.js"),
    storageAccountsHttps: require(__dirname +
      "/plugins/azure/storageaccounts/storageAccountsHttps.js"),
    storageAccountsEncryption: require(__dirname +
      "/plugins/azure/storageaccounts/storageAccountsEncryption.js"),
    logStorageEncryption: require(__dirname +
      "/plugins/azure/storageaccounts/logStorageEncryption.js"),
    logContainerPublicAccess: require(__dirname +
      "/plugins/azure/storageaccounts/logContainerPublicAccess.js"),
    storageAccountsAADEnabled: require(__dirname +
      "/plugins/azure/storageaccounts/storageAccountsAADEnabled.js"),
    blobServiceEncryption: require(__dirname +
      "/plugins/azure/storageaccounts/blobServiceEncryption.js"),
    trustedMsAccessEnabled: require(__dirname +
      "/plugins/azure/storageaccounts/trustedMsAccessEnabled.js"),
    blobSoftDeletionEnabled: require(__dirname +
      "/plugins/azure/storageaccounts/blobSoftDeletionEnabled.js"),
    storageAccountsTlsVersion: require(__dirname +
      "/plugins/azure/storageaccounts/storageAccountsTlsVersion.js"),

    blobContainersPrivateAccess: require(__dirname +
      "/plugins/azure/blobservice/blobContainersPrivateAccess.js"),
    blobServiceImmutable: require(__dirname +
      "/plugins/azure/blobservice/blobServiceImmutable.js"),

    fileServiceAllAccessAcl: require(__dirname +
      "/plugins/azure/fileservice/fileServiceAllAccessAcl.js"),
    tableServiceAllAccessAcl: require(__dirname +
      "/plugins/azure/tableservice/tableServiceAllAccessAcl.js"),
    queueServiceAllAccessAcl: require(__dirname +
      "/plugins/azure/queueservice/queueServiceAllAccessAcl.js"),

    minimumTlsVersion: require(__dirname +
      "/plugins/azure/redisCache/minimumTlsVersion.js"),
    sslAccessOnlyEnabled: require(__dirname +
      "/plugins/azure/redisCache/sslAccessOnlyEnabled.js"),

    multipleSubnets: require(__dirname +
      "/plugins/azure/virtualnetworks/multipleSubnets.js"),
    ddosStandardProtectionEnabled: require(__dirname +
      "/plugins/azure/virtualnetworks/ddosStandardProtectionEnabled.js"),
    noNetworkGatewaysInUse: require(__dirname +
      "/plugins/azure/virtualnetworks/noNetworkGatewaysInUse.js"),
    virtualNetworkPeering: require(__dirname +
      "/plugins/azure/virtualnetworks/virtualNetworkPeering.js"),
    noGatewayConnections: require(__dirname +
      "/plugins/azure/virtualnetworks/noGatewayConnections.js"),
    managedNatGateway: require(__dirname +
      "/plugins/azure/virtualnetworks/managedNatGateway.js"),

    vmInstanceLimit: require(__dirname +
      "/plugins/azure/virtualmachines/vmInstanceLimit.js"),
    classicInstances: require(__dirname +
      "/plugins/azure/virtualmachines/classicInstances.js"),
    vmAgentEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/vmAgentEnabled.js"),
    vmDiskOSEncryption: require(__dirname +
      "/plugins/azure/virtualmachines/vmDiskOSEncryption.js"),
    vmDiskDataEncryption: require(__dirname +
      "/plugins/azure/virtualmachines/vmDiskDataEncryption.js"),
    vmEndpointProtection: require(__dirname +
      "/plugins/azure/virtualmachines/vmEndpointProtection.js"),
    vmAutoUpdateEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/vmAutoUpdateEnabled.js"),
    vmAvailabilitySetEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/vmAvailabilitySetEnabled.js"),
    scaleSetMultiAz: require(__dirname +
      "/plugins/azure/virtualmachines/scaleSetMultiAz.js"),
    scaleSetAutoscaleEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/scaleSetAutoscaleEnabled.js"),
    vmAvailabilitySetLimit: require(__dirname +
      "/plugins/azure/virtualmachines/vmAvailabilitySetLimit.js"),
    vmDailyBackupRetention: require(__dirname +
      "/plugins/azure/virtualmachines/vmDailyBackupRetention.js"),
    vmBackupsEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/vmBackupsEnabled.js"),
    premiumSsdDisabled: require(__dirname +
      "/plugins/azure/virtualmachines/premiumSsdDisabled.js"),
    vmManagedDisks: require(__dirname +
      "/plugins/azure/virtualmachines/vmManagedDisks.js"),
    autoInstanceRepairsEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/autoInstanceRepairsEnabled.js"),
    noEmptyScaleSets: require(__dirname +
      "/plugins/azure/virtualmachines/noEmptyScaleSets.js"),
    acceleratedNetworkingEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/acceleratedNetworkingEnabled.js"),
    passwordAuthDisabled: require(__dirname +
      "/plugins/azure/virtualmachines/passwordAuthDisabled.js"),
    approvedVmImage: require(__dirname +
      "/plugins/azure/virtualmachines/approvedVmImage.js"),
    autoOsUpgradesEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/autoOsUpgradesEnabled.js"),
    noUnattachedDisks: require(__dirname +
      "/plugins/azure/virtualmachines/noUnattachedDisks.js"),
    autoscaleNotificationsEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/autoscaleNotificationsEnabled.js"),
    instantRestoreRetention: require(__dirname +
      "/plugins/azure/virtualmachines/instantRestoreRetention.js"),
    desiredSkuSize: require(__dirname +
      "/plugins/azure/virtualmachines/desiredSkuSize.js"),
    approvedVmExtension: require(__dirname +
      "/plugins/azure/virtualmachines/approvedVmExtension.js"),
    guestLevelDiagnosticsEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/guestLevelDiagnosticsEnabled.js"),
    oldVmDiskSnapshots: require(__dirname +
      "/plugins/azure/virtualmachines/oldVmDiskSnapshots.js"),
    vmAdAuthenticationEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/vmAdAuthenticationEnabled.js"),
    performanceDiagnosticsEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/performanceDiagnosticsEnabled.js"),
    vmBootDiagnosticsEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/vmBootDiagnosticsEnabled.js"),
    scaleSetHealthMonitoring: require(__dirname +
      "/plugins/azure/virtualmachines/scaleSetHealthMonitoring.js"),
    diskByokEncryptionEnabled: require(__dirname +
      "/plugins/azure/virtualmachines/diskByokEncryptionEnabled.js"),

    lbLogAnalyticsEnabled: require(__dirname +
      "/plugins/azure/monitor/lbLogAnalyticsEnabled.js"),
    kvLogAnalyticsEnabled: require(__dirname +
      "/plugins/azure/monitor/kvLogAnalyticsEnabled.js"),
    nsgLogAnalyticsEnabled: require(__dirname +
      "/plugins/azure/monitor/nsgLogAnalyticsEnabled.js"),
    logProfileArchiveData: require(__dirname +
      "/plugins/azure/monitor/logProfileArchiveData.js"),
    logProfileRetentionPolicy: require(__dirname +
      "/plugins/azure/monitor/logProfileRetentionPolicy.js"),
    monitorLogsEnabled: require(__dirname +
      "/plugins/azure/monitor/monitorLogsEnabled.js"),
    diagnosticsCapturedCategories: require(__dirname +
      "/plugins/azure/monitor/diagnosticsCapturedCategories.js"),
    diagnosticsSettingsEnabled: require(__dirname +
      "/plugins/azure/monitor/diagnosticsSettingsEnabled.js"),

    securityPolicyAlertsEnabled: require(__dirname +
      "/plugins/azure/logalerts/securityPolicyAlertsEnabled.js"),
    nsgLoggingEnabled: require(__dirname +
      "/plugins/azure/logalerts/nsgLoggingEnabled.js"),
    sqlServerFirewallRuleEnabled: require(__dirname +
      "/plugins/azure/logalerts/sqlServerFirewallRuleEnabled.js"),
    virtualNetworkRuleEnabled: require(__dirname +
      "/plugins/azure/logalerts/virtualNetworkRuleEnabled.js"),
    securitySolutionLogging: require(__dirname +
      "/plugins/azure/logalerts/securitySolutionLogging.js"),
    nsgRuleLoggingEnabled: require(__dirname +
      "/plugins/azure/logalerts/nsgRuleLoggingEnabled.js"),
    policyAssignmentLogging: require(__dirname +
      "/plugins/azure/logalerts/policyAssignmentLogging.js"),
    keyVaultsLoggingEnabled: require(__dirname +
      "/plugins/azure/logalerts/keyVaultsLoggingEnabled.js"),
    storageAccountLoggingEnabled: require(__dirname +
      "/plugins/azure/logalerts/storageAccountLoggingEnabled.js"),
    sqlServerDatabaseLoggingEnabled: require(__dirname +
      "/plugins/azure/logalerts/sqlServerDatabaseLoggingEnabled.js"),
    loadBalancerLoggingEnabled: require(__dirname +
      "/plugins/azure/logalerts/loadBalancerLoggingEnabled.js"),
    virtualMachineLogging: require(__dirname +
      "/plugins/azure/logalerts/virtualMachineLogging.js"),
    postgreSqlDBLoggingEnabled: require(__dirname +
      "/plugins/azure/logalerts/postgreSqlDBLoggingEnabled.js"),
    sqlServerDatabaseRenameAlert: require(__dirname +
      "/plugins/azure/logalerts/sqlServerDatabaseRenameAlert.js"),
    virtualMachinesPowerOffAlert: require(__dirname +
      "/plugins/azure/logalerts/virtualMachinesPowerOffAlert.js"),
    virtualMachinesDeallocateAlert: require(__dirname +
      "/plugins/azure/logalerts/virtualMachinesDeallocateAlert.js"),

    monitorEndpointProtection: require(__dirname +
      "/plugins/azure/securitycenter/monitorEndpointProtection.js"),
    monitorBlobEncryption: require(__dirname +
      "/plugins/azure/securitycenter/monitorBlobEncryption.js"),
    monitorSystemUpdates: require(__dirname +
      "/plugins/azure/securitycenter/monitorSystemUpdates.js"),
    monitorJitNetworkAccess: require(__dirname +
      "/plugins/azure/securitycenter/monitorJitNetworkAccess.js"),
    monitorVMVulnerability: require(__dirname +
      "/plugins/azure/securitycenter/monitorVMVulnerability.js"),
    monitorSQLEncryption: require(__dirname +
      "/plugins/azure/securitycenter/monitorSqlEncryption.js"),
    monitorSQLAuditing: require(__dirname +
      "/plugins/azure/securitycenter/monitorSqlAuditing.js"),
    monitorDiskEncryption: require(__dirname +
      "/plugins/azure/securitycenter/monitorDiskEncryption.js"),
    appWhitelistingEnabled: require(__dirname +
      "/plugins/azure/securitycenter/appWhitelistingEnabled.js"),
    securityConfigMonitoring: require(__dirname +
      "/plugins/azure/securitycenter/securityConfigMonitoring.js"),
    autoProvisioningEnabled: require(__dirname +
      "/plugins/azure/securitycenter/autoProvisioningEnabled.js"),
    adminSecurityAlertsEnabled: require(__dirname +
      "/plugins/azure/securitycenter/adminSecurityAlertsEnabled.js"),
    securityContactsEnabled: require(__dirname +
      "/plugins/azure/securitycenter/securityContactsEnabled.js"),
    monitorNsgEnabled: require(__dirname +
      "/plugins/azure/securitycenter/monitorNsgEnabled.js"),
    highSeverityAlertsEnabled: require(__dirname +
      "/plugins/azure/securitycenter/highSeverityAlertsEnabled.js"),
    standardPricingEnabled: require(__dirname +
      "/plugins/azure/securitycenter/standardPricingEnabled.js"),
    monitorExternalAccounts: require(__dirname +
      "/plugins/azure/securitycenter/monitorExternalAccounts.js"),
    monitorIpForwarding: require(__dirname +
      "/plugins/azure/securitycenter/monitorIpForwarding.js"),
    monitorNextGenerationFirewall: require(__dirname +
      "/plugins/azure/securitycenter/monitorNextGenerationFirewall.js"),
    monitorSubscriptionOwners: require(__dirname +
      "/plugins/azure/securitycenter/monitorSubscriptionOwners.js"),

    resourceAllowedLocations: require(__dirname +
      "/plugins/azure/policyservice/resourceAllowedLocations.js"),
    resourceLocationMatch: require(__dirname +
      "/plugins/azure/policyservice/resourceLocationMatch.js"),

    enforceMySQLSSLConnection: require(__dirname +
      "/plugins/azure/mysqlserver/enforceMySQLSSLConnection.js"),

    logRetentionDays: require(__dirname +
      "/plugins/azure/postgresqlserver/logRetentionDays.js"),
    connectionThrottlingEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/connectionThrottlingEnabled.js"),
    logDurationEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/logDurationEnabled.js"),
    logDisconnectionsEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/logDisconnectionsEnabled.js"),
    logConnectionsEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/logConnectionsEnabled.js"),
    logCheckpointsEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/logCheckpointsEnabled.js"),
    enforcePostgresSSLConnection: require(__dirname +
      "/plugins/azure/postgresqlserver/enforcePostgresSSLConnection.js"),
    storageAutoGrowthEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/storageAutoGrowthEnabled.js"),
    activeDirectoryAdminEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/activeDirectoryAdminEnabled.js"),
    geoRedundantBackupEnabled: require(__dirname +
      "/plugins/azure/postgresqlserver/geoRedundantBackupEnabled.js"),

    openOracleAutoDataWarehouse: require(__dirname +
      "/plugins/azure/networksecuritygroups/openOracleAutoDataWarehouse.js"),
    networkWatcherEnabled: require(__dirname +
      "/plugins/azure/networksecuritygroups/networkWatcherEnabled.js"),
    excessiveSecurityGroups: require(__dirname +
      "/plugins/azure/networksecuritygroups/excessiveSecurityGroups.js"),
    defaultSecurityGroup: require(__dirname +
      "/plugins/azure/networksecuritygroups/defaultSecurityGroup.js"),
    openAllPorts: require(__dirname +
      "/plugins/azure/networksecuritygroups/openAllPorts.js"),
    openSMTP: require(__dirname +
      "/plugins/azure/networksecuritygroups/openSMTP.js"),
    openOracle: require(__dirname +
      "/plugins/azure/networksecuritygroups/openOracle.js"),
    openKibana: require(__dirname +
      "/plugins/azure/networksecuritygroups/openKibana.js"),
    openHadoopNameNode: require(__dirname +
      "/plugins/azure/networksecuritygroups/openHadoopNameNode.js"),
    openHadoopNameNodeWebUI: require(__dirname +
      "/plugins/azure/networksecuritygroups/openHadoopNameNodeWebUI.js"),
    openFTP: require(__dirname +
      "/plugins/azure/networksecuritygroups/openFTP.js"),
    openSSH: require(__dirname +
      "/plugins/azure/networksecuritygroups/openSSH.js"),
    openCIFS: require(__dirname +
      "/plugins/azure/networksecuritygroups/openCIFS.js"),
    openDocker: require(__dirname +
      "/plugins/azure/networksecuritygroups/openDocker.js"),
    openDNS: require(__dirname +
      "/plugins/azure/networksecuritygroups/openDNS.js"),
    openRDP: require(__dirname +
      "/plugins/azure/networksecuritygroups/openRDP.js"),
    openTelnet: require(__dirname +
      "/plugins/azure/networksecuritygroups/openTelnet.js"),
    openVNCServer: require(__dirname +
      "/plugins/azure/networksecuritygroups/openVNCServer.js"),
    openVNCClient: require(__dirname +
      "/plugins/azure/networksecuritygroups/openVNCClient.js"),
    openMySQL: require(__dirname +
      "/plugins/azure/networksecuritygroups/openMySQL.js"),
    openNetBIOS: require(__dirname +
      "/plugins/azure/networksecuritygroups/openNetBIOS.js"),
    openPostgreSQL: require(__dirname +
      "/plugins/azure/networksecuritygroups/openPostgreSQL.js"),
    openRPC: require(__dirname +
      "/plugins/azure/networksecuritygroups/openRPC.js"),
    openSalt: require(__dirname +
      "/plugins/azure/networksecuritygroups/openSalt.js"),
    openSMBoTCP: require(__dirname +
      "/plugins/azure/networksecuritygroups/openSMBoTCP.js"),
    openSQLServer: require(__dirname +
      "/plugins/azure/networksecuritygroups/openSQLServer.js"),
    openUDP: require(__dirname +
      "/plugins/azure/networksecuritygroups/openUDP.js"),

    nsgFlowLogsRetentionPeriod: require(__dirname +
      "/plugins/azure/networkwatchers/nsgFlowLogsRetentionPeriod.js"),

    resourceUsageLimit: require(__dirname +
      "/plugins/azure/resources/resourceUsageLimit.js"),
    managementLockEnabled: require(__dirname +
      "/plugins/azure/resources/managementLockEnabled.js"),

    emailAccountAdminsEnabled: require(__dirname +
      "/plugins/azure/sqlserver/emailAccountAdminsEnabled.js"),
    sendAlertsEnabled: require(__dirname +
      "/plugins/azure/sqlserver/sendAlertsEnabled.js"),
    advancedDataSecurityEnabled: require(__dirname +
      "/plugins/azure/sqlserver/advancedDataSecurityEnabled.js"),
    tdeProtectorEncrypted: require(__dirname +
      "/plugins/azure/sqlserver/tdeProtectorEncrypted.js"),
    noPublicAccess: require(__dirname +
      "/plugins/azure/sqlserver/noPublicAccess.js"),
    serverPrivateEndpoints: require(__dirname +
      "/plugins/azure/sqlserver/serverPrivateEndpoints.js"),
    auditRetentionPolicy: require(__dirname +
      "/plugins/azure/sqlserver/auditRetentionPolicy.js"),
    auditActionGroupsEnabled: require(__dirname +
      "/plugins/azure/sqlserver/auditActionGroupsEnabled.js"),
    serverAuditingEnabled: require(__dirname +
      "/plugins/azure/sqlserver/serverAuditingEnabled.js"),
    azureADAdminEnabled: require(__dirname +
      "/plugins/azure/sqlserver/azureADAdminEnabled.js"),
    sqlServerTlsVersion: require(__dirname +
      "/plugins/azure/sqlserver/sqlServerTlsVersion.js"),
    autoFailoverGroupsEnabled: require(__dirname +
      "/plugins/azure/sqlserver/autoFailoverGroupsEnabled.js"),
    automaticTuningEnabled: require(__dirname +
      "/plugins/azure/sqlserver/automaticTuningEnabled.js"),
    enableATP: require(__dirname + "/plugins/azure/sqlserver/enableATP.js"),
    serverSendEmailToAdmins: require(__dirname +
      "/plugins/azure/sqlserver/serverSendEmailToAdmins.js"),
    sqlServerRecurringScans: require(__dirname +
      "/plugins/azure/sqlserver/sqlServerRecurringScans.js"),
    sqlServerSendScanReports: require(__dirname +
      "/plugins/azure/sqlserver/sqlServerSendScanReports.js"),

    javaVersion: require(__dirname +
      "/plugins/azure/appservice/javaVersion.js"),
    phpVersion: require(__dirname + "/plugins/azure/appservice/phpVersion.js"),
    pythonVersion: require(__dirname +
      "/plugins/azure/appservice/pythonVersion.js"),
    clientCertEnabled: require(__dirname +
      "/plugins/azure/appservice/clientCertEnabled.js"),
    netFrameworkVersion: require(__dirname +
      "/plugins/azure/appservice/netFrameworkVersion.js"),
    authEnabled: require(__dirname +
      "/plugins/azure/appservice/authEnabled.js"),
    identityEnabled: require(__dirname +
      "/plugins/azure/appservice/identityEnabled.js"),
    http20Enabled: require(__dirname +
      "/plugins/azure/appservice/http20Enabled.js"),
    httpsOnlyEnabled: require(__dirname +
      "/plugins/azure/appservice/httpsOnlyEnabled.js"),
    tlsVersionCheck: require(__dirname +
      "/plugins/azure/appservice/tlsVersionCheck.js"),
    remoteDebuggingDisabled: require(__dirname +
      "/plugins/azure/appservice/remoteDebuggingDisabled.js"),
    alwaysOnEnabled: require(__dirname +
      "/plugins/azure/appservice/alwaysOnEnabled.js"),
    certificateExpiry: require(__dirname +
      "/plugins/azure/appservice/certificateExpiry.js"),
    scmSiteAccessRestriction: require(__dirname +
      "/plugins/azure/appservice/scmSiteAccessRestriction.js"),
    appServiceAccessRestriction: require(__dirname +
      "/plugins/azure/appservice/appServiceAccessRestriction.js"),
    webAppsADEnabled: require(__dirname +
      "/plugins/azure/appservice/webAppsADEnabled.js"),
    appInsightsEnabled: require(__dirname +
      "/plugins/azure/appservice/appInsightsEnabled.js"),
    automatedBackupsEnabled: require(__dirname +
      "/plugins/azure/appservice/automatedBackupsEnabled.js"),
    ftpsOnlyAccessEnabled: require(__dirname +
      "/plugins/azure/appservice/ftpsOnlyAccessEnabled.js"),
    backupRetentionPeriod: require(__dirname +
      "/plugins/azure/appservice/backupRetentionPeriod.js"),
    disableFTPDeployments: require(__dirname +
      "/plugins/azure/appservice/disableFTPDeployments.js"),

    rbacEnabled: require(__dirname +
      "/plugins/azure/kubernetesservice/rbacEnabled.js"),
    aksLatestVersion: require(__dirname +
      "/plugins/azure/kubernetesservice/aksLatestVersion.js"),
    aksAgentVersion: require(__dirname +
      "/plugins/azure/kubernetesservice/aksAgentVersion.js"),

    acrAdminUser: require(__dirname +
      "/plugins/azure/containerregistry/acrAdminUser.js"),

    endpointLoggingEnabled: require(__dirname +
      "/plugins/azure/cdnprofiles/endpointLoggingEnabled.js"),
    detectInsecureCustomOrigin: require(__dirname +
      "/plugins/azure/cdnprofiles/detectInsecureCustomOrigin.js"),

    passwordRequiresLowercase: require(__dirname +
      "/plugins/azure/activedirectory/passwordRequiresLowercase.js"),
    passwordRequiresNumbers: require(__dirname +
      "/plugins/azure/activedirectory/passwordRequiresNumbers.js"),
    passwordRequiresSymbols: require(__dirname +
      "/plugins/azure/activedirectory/passwordRequiresSymbols.js"),
    passwordRequiresUppercase: require(__dirname +
      "/plugins/azure/activedirectory/passwordRequiresUppercase.js"),
    minPasswordLength: require(__dirname +
      "/plugins/azure/activedirectory/minPasswordLength.js"),
    ensureNoGuestUser: require(__dirname +
      "/plugins/azure/activedirectory/ensureNoGuestUser.js"),
    noCustomOwnerRoles: require(__dirname +
      "/plugins/azure/activedirectory/noCustomOwnerRoles.js"),

    dbAuditingEnabled: require(__dirname +
      "/plugins/azure/sqldatabases/dbAuditingEnabled.js"),
    sqlDbMultiAz: require(__dirname +
      "/plugins/azure/sqldatabases/sqlDbMultiAz.js"),
    dbRestorable: require(__dirname +
      "/plugins/azure/sqldatabases/dbRestorable.js"),
    pitrBackupEnabled: require(__dirname +
      "/plugins/azure/sqldatabases/pitrBackupEnabled.js"),

    lbHttpsOnly: require(__dirname +
      "/plugins/azure/loadbalancer/lbHttpsOnly.js"),
    lbNoInstances: require(__dirname +
      "/plugins/azure/loadbalancer/lbNoInstances.js"),

    kvRecoveryEnabled: require(__dirname +
      "/plugins/azure/keyvaults/kvRecoveryEnabled.js"),
    keyExpirationEnabled: require(__dirname +
      "/plugins/azure/keyvaults/keyExpirationEnabled.js"),
    secretExpirationEnabled: require(__dirname +
      "/plugins/azure/keyvaults/secretExpirationEnabled.js"),
    databaseTierCmkInUse: require(__dirname +
      "/plugins/azure/keyvaults/databaseTierCmkInUse.js"),
    sslCertificateAutoRenewal: require(__dirname +
      "/plugins/azure/keyvaults/sslCertificateAutoRenewal.js"),
    manageKeyAccessAndPermissions: require(__dirname +
      "/plugins/azure/keyvaults/manageKeyAccessAndPermissions.js"),
    rsaCertificateKeySize: require(__dirname +
      "/plugins/azure/keyvaults/rsaCertificateKeySize.js"),
    keyVaultSecretExpiry: require(__dirname +
      "/plugins/azure/keyvaults/keyVaultSecretExpiry.js"),
    keyVaultKeyExpiry: require(__dirname +
      "/plugins/azure/keyvaults/keyVaultKeyExpiry.js"),
    allowedCertificateKeyTypes: require(__dirname +
      "/plugins/azure/keyvaults/allowedCertificateKeyTypes.js"),
    appTierCmkInUse: require(__dirname +
      "/plugins/azure/keyvaults/appTierCmkInUse.js"),
    keyVaultInUse: require(__dirname +
      "/plugins/azure/keyvaults/keyVaultInUse.js"),
    restrictDefaultNetworkAccess: require(__dirname +
      "/plugins/azure/keyvaults/restrictDefaultNetworkAccess.js"),
    trustedServicesEnabled: require(__dirname +
      "/plugins/azure/keyvaults/trustedServicesEnabled.js"),

    advancedThreatProtection: require(__dirname +
      "/plugins/azure/cosmosdb/advancedThreatProtection.js"),
    cosmosPublicAccessDisabled: require(__dirname +
      "/plugins/azure/cosmosdb/cosmosPublicAccessDisabled.js"),
    automaticFailoverEnabled: require(__dirname +
      "/plugins/azure/cosmosdb/automaticFailoverEnabled.js"),

    checkAdvisorRecommendations: require(__dirname +
      "/plugins/azure/advisor/checkAdvisorRecommendations.js"),

    enableDefenderForStorage: require(__dirname +
      "/plugins/azure/defender/enableDefenderForStorage.js"),
    enableDefenderForContainers: require(__dirname +
      "/plugins/azure/defender/enableDefenderForContainers.js"),
    enableDefenderForSqlServers: require(__dirname +
      "/plugins/azure/defender/enableDefenderForSqlServers.js"),
    enableEndpointIntegration: require(__dirname +
      "/plugins/azure/defender/enableEndpointIntegration.js"),
  },
  github: {
    publicKeysRotated: require(__dirname +
      "/plugins/github/users/publicKeysRotated.js"),
    gpgKeysRotated: require(__dirname +
      "/plugins/github/users/gpgKeysRotated.js"),
    userMfaEnabled: require(__dirname +
      "/plugins/github/users/userMfaEnabled.js"),
    userPrivateEmails: require(__dirname +
      "/plugins/github/users/userPrivateEmails.js"),
    orgPlanLimit: require(__dirname + "/plugins/github/orgs/orgPlanLimit.js"),
    orgDefaultPermission: require(__dirname +
      "/plugins/github/orgs/orgDefaultPermission.js"),
    orgMfaRequired: require(__dirname +
      "/plugins/github/orgs/orgMfaRequired.js"),
    orgExcessiveOwners: require(__dirname +
      "/plugins/github/orgs/orgExcessiveOwners.js"),
    repoDeployKeysRotated: require(__dirname +
      "/plugins/github/repos/repoDeployKeysRotated.js"),
    repoOutsideCollaborators: require(__dirname +
      "/plugins/github/repos/repoOutsideCollaborators.js"),
  },
  oracle: {
    instanceMonitoringEnabled: require(__dirname +
      "/plugins/oracle/compute/instanceMonitoringEnabled.js"),
    autoscaleEnabled: require(__dirname +
      "/plugins/oracle/compute/autoscaleEnabled.js"),
    instancePoolMultiAD: require(__dirname +
      "/plugins/oracle/compute/instancePoolMultiAD.js"),
    instanceMaxCount: require(__dirname +
      "/plugins/oracle/compute/instanceMaxCount.js"),
    bootVolumeTransitEncryption: require(__dirname +
      "/plugins/oracle/compute/bootVolumeTransitEncryption.js"),
    bootVolumeRestorable: require(__dirname +
      "/plugins/oracle/compute/bootVolumeRestorable.js"),
    bootVolumeBackupEnabled: require(__dirname +
      "/plugins/oracle/compute/bootVolumeBackupEnabled.js"),
    instancePolicyProtection: require(__dirname +
      "/plugins/oracle/compute/instancePolicyProtection.js"),
    bootVolumeCMKEncryption: require(__dirname +
      "/plugins/oracle/compute/bootVolumeCMKEncryption.js"),
    legacyEndpointDisabled: require(__dirname +
      "/plugins/oracle/compute/legacyEndpointDisabled.js"),

    usersMfaEnabled: require(__dirname +
      "/plugins/oracle/identity/usersMfaEnabled.js"),
    passwordRequiresLowercase: require(__dirname +
      "/plugins/oracle/identity/passwordRequiresLowercase.js"),
    passwordRequiresNumbers: require(__dirname +
      "/plugins/oracle/identity/passwordRequiresNumbers.js"),
    passwordRequiresSymbols: require(__dirname +
      "/plugins/oracle/identity/passwordRequiresSymbols.js"),
    passwordRequiresUppercase: require(__dirname +
      "/plugins/oracle/identity/passwordRequiresUppercase.js"),
    minPasswordLength: require(__dirname +
      "/plugins/oracle/identity/minPasswordLength.js"),
    emptyGroups: require(__dirname + "/plugins/oracle/identity/emptyGroups.js"),
    excessivePolicies: require(__dirname +
      "/plugins/oracle/identity/excessivePolicies.js"),
    excessivePolicyStatements: require(__dirname +
      "/plugins/oracle/identity/excessivePolicyStatements.js"),
    policyLeastPrivilege: require(__dirname +
      "/plugins/oracle/identity/policyLeastPrivilege.js"),
    usersEmailVerified: require(__dirname +
      "/plugins/oracle/identity/usersEmailVerified.js"),
    adminUserAPIKeys: require(__dirname +
      "/plugins/oracle/identity/adminUserAPIKeys.js"),
    userAuthTokenRotated: require(__dirname +
      "/plugins/oracle/identity/userAuthTokenRotated.js"),
    userCustomerSecretKeysRotated: require(__dirname +
      "/plugins/oracle/identity/userCustomerSecretKeysRotated.js"),
    userAPIKeysRotated: require(__dirname +
      "/plugins/oracle/identity/userAPIKeysRotated.js"),
    usersPasswordLastUsed: require(__dirname +
      "/plugins/oracle/identity/usersPasswordLastUsed.js"),
    defaultTagsForResources: require(__dirname +
      "/plugins/oracle/identity/defaultTagsForResources.js"),
    notificationTopicSubscription: require(__dirname +
      "/plugins/oracle/identity/notificationTopicSubscription.js"),
    identityProviderChanges: require(__dirname +
      "/plugins/oracle/identity/identityProviderChanges.js"),
    idpGroupMappingChanges: require(__dirname +
      "/plugins/oracle/identity/idpGroupMappingChanges.js"),
    iamGroupChanges: require(__dirname +
      "/plugins/oracle/identity/iamGroupChanges.js"),
    iamPolicyChanges: require(__dirname +
      "/plugins/oracle/identity/iamPolicyChanges.js"),
    userChanges: require(__dirname + "/plugins/oracle/identity/userChanges.js"),

    openSSH: require(__dirname + "/plugins/oracle/networking/openSSH.js"),
    openOracleAutoDataWarehouse: require(__dirname +
      "/plugins/oracle/networking/openOracleAutoDataWarehouse.js"),
    openAllPortsProtocols: require(__dirname +
      "/plugins/oracle/networking/openAllPortsProtocols.js"),
    openRPC: require(__dirname + "/plugins/oracle/networking/openRPC.js"),
    openRDP: require(__dirname + "/plugins/oracle/networking/openRDP.js"),
    openVNCServer: require(__dirname +
      "/plugins/oracle/networking/openVNCServer.js"),
    openVNCClient: require(__dirname +
      "/plugins/oracle/networking/openVNCClient.js"),
    openTelnet: require(__dirname + "/plugins/oracle/networking/openTelnet.js"),
    openSMBoTCP: require(__dirname +
      "/plugins/oracle/networking/openSMBoTCP.js"),
    openOracle: require(__dirname + "/plugins/oracle/networking/openOracle.js"),
    openPostgreSQL: require(__dirname +
      "/plugins/oracle/networking/openPostgreSQL.js"),
    openNetBIOS: require(__dirname +
      "/plugins/oracle/networking/openNetBIOS.js"),
    openMySQL: require(__dirname + "/plugins/oracle/networking/openMySQL.js"),
    openFTP: require(__dirname + "/plugins/oracle/networking/openFTP.js"),
    openCIFS: require(__dirname + "/plugins/oracle/networking/openCIFS.js"),
    openDNS: require(__dirname + "/plugins/oracle/networking/openDNS.js"),
    openDocker: require(__dirname + "/plugins/oracle/networking/openDocker.js"),
    openSQLServer: require(__dirname +
      "/plugins/oracle/networking/openSQLServer.js"),
    openHadoopNameNode: require(__dirname +
      "/plugins/oracle/networking/openHadoopNameNode.js"),
    openHadoopNameNodeWebUI: require(__dirname +
      "/plugins/oracle/networking/openHadoopNameNodeWebUI.js"),
    openKibana: require(__dirname + "/plugins/oracle/networking/openKibana.js"),
    openSalt: require(__dirname + "/plugins/oracle/networking/openSalt.js"),
    openSMTP: require(__dirname + "/plugins/oracle/networking/openSMTP.js"),
    flowLogsEnabled: require(__dirname +
      "/plugins/oracle/networking/flowLogsEnabled.js"),
    vcnChanges: require(__dirname + "/plugins/oracle/networking/vcnChanges.js"),
    routeTableChanges: require(__dirname +
      "/plugins/oracle/networking/routeTableChanges.js"),
    securityListChanges: require(__dirname +
      "/plugins/oracle/networking/securityListChanges.js"),
    securityGroupChanges: require(__dirname +
      "/plugins/oracle/networking/securityGroupChanges.js"),
    networkGatewayChanges: require(__dirname +
      "/plugins/oracle/networking/networkGatewayChanges.js"),
    statelessSecurityRules: require(__dirname +
      "/plugins/oracle/networking/statelessSecurityRules.js"),
    defaultSecurityList: require(__dirname +
      "/plugins/oracle/networking/defaultSecurityList.js"),
    excessiveSecurityLists: require(__dirname +
      "/plugins/oracle/networking/excessiveSecurityLists.js"),
    lbHttpsOnly: require(__dirname +
      "/plugins/oracle/networking/lbHttpsOnly.js"),
    lbNSGEnabled: require(__dirname +
      "/plugins/oracle/networking/lbNSGEnabled.js"),
    lbNoInstances: require(__dirname +
      "/plugins/oracle/networking/lbNoInstances.js"),
    wafPublicIpEnabled: require(__dirname +
      "/plugins/oracle/networking/wafPublicIpEnabled.js"),
    inboundSecurityLists: require(__dirname +
      "/plugins/oracle/networking/inboundSecurityLists.js"),
    multipleSubnets: require(__dirname +
      "/plugins/oracle/networking/multipleSubnets.js"),
    subnetMultiAd: require(__dirname +
      "/plugins/oracle/networking/subnetMultiAd.js"),

    bucketPublicAccessType: require(__dirname +
      "/plugins/oracle/objectstore/bucketPublicAccessType.js"),
    preAuthRequestsExpiry: require(__dirname +
      "/plugins/oracle/objectstore/preAuthRequestsExpiry.js"),
    preAuthRequestsAccess: require(__dirname +
      "/plugins/oracle/objectstore/preAuthRequestsAccess.js"),
    objectPolicyProtection: require(__dirname +
      "/plugins/oracle/objectstore/objectPolicyProtection.js"),
    bucketCMKEncryption: require(__dirname +
      "/plugins/oracle/objectstore/bucketCMKEncryption.js"),
    bucketVersioning: require(__dirname +
      "/plugins/oracle/objectstore/bucketVersioning.js"),
    bucketObjectEvents: require(__dirname +
      "/plugins/oracle/objectstore/bucketObjectEvents.js"),
    bucketWriteLogsEnabled: require(__dirname +
      "/plugins/oracle/objectstore/bucketWriteLogsEnabled.js"),

    nfsPublicAccess: require(__dirname +
      "/plugins/oracle/filestorage/nfsPublicAccess.js"),
    nfsPolicyProtection: require(__dirname +
      "/plugins/oracle/filestorage/nfsPolicyProtection.js"),
    fileSystemsCMKEncryption: require(__dirname +
      "/plugins/oracle/filestorage/fileSystemsCMKEncryption.js"),

    dbBackupEnabled: require(__dirname +
      "/plugins/oracle/database/dbBackupEnabled.js"),
    dbPrivateSubnetOnly: require(__dirname +
      "/plugins/oracle/database/dbPrivateSubnetOnly.js"),
    dbNSGEnabled: require(__dirname +
      "/plugins/oracle/database/dbNSGEnabled.js"),
    dbPolicyProtection: require(__dirname +
      "/plugins/oracle/database/dbPolicyProtection.js"),

    blockVolumeRestorable: require(__dirname +
      "/plugins/oracle/blockstorage/blockVolumeRestorable.js"),
    blockVolumeBackupEnabled: require(__dirname +
      "/plugins/oracle/blockstorage/blockVolumeBackupEnabled.js"),
    volumeGroupsRestorable: require(__dirname +
      "/plugins/oracle/blockstorage/volumeGroupsRestorable.js"),
    blockPolicyProtection: require(__dirname +
      "/plugins/oracle/blockstorage/blockPolicyProtection.js"),
    blockVolumeCMKEncryption: require(__dirname +
      "/plugins/oracle/blockstorage/blockVolumeCMKEncryption.js"),

    logRetentionPeriod: require(__dirname +
      "/plugins/oracle/audit/logRetentionPeriod.js"),

    okePrivateEndpoint: require(__dirname +
      "/plugins/oracle/oke/okePrivateEndpoint.js"),
    okeSecretsEncrypted: require(__dirname +
      "/plugins/oracle/oke/okeSecretsEncrypted.js"),
    okeSecurityGroups: require(__dirname +
      "/plugins/oracle/oke/okeSecurityGroups.js"),

    cloudguardEnabled: require(__dirname +
      "/plugins/oracle/cloudguard/cloudguardEnabled.js"),

    keyRotation: require(__dirname + "/plugins/oracle/vaults/keyRotation.js"),
  },
  google: {
    excessiveFirewallRules: require(__dirname +
      "/plugins/google/vpcnetwork/excessiveFirewallRules.js"),
    openCassandra: require(__dirname +
      "/plugins/google/vpcnetwork/openCassandra.js"),
    openDNS: require(__dirname + "/plugins/google/vpcnetwork/openDNS.js"),
    openDocker: require(__dirname + "/plugins/google/vpcnetwork/openDocker.js"),
    openSSH: require(__dirname + "/plugins/google/vpcnetwork/openSSH.js"),
    openCIFS: require(__dirname + "/plugins/google/vpcnetwork/openCIFS.js"),
    openAllPorts: require(__dirname +
      "/plugins/google/vpcnetwork/openAllPorts.js"),
    openFTP: require(__dirname + "/plugins/google/vpcnetwork/openFTP.js"),
    openHadoopNameNode: require(__dirname +
      "/plugins/google/vpcnetwork/openHadoopNameNode.js"),
    openHadoopNameNodeWebUI: require(__dirname +
      "/plugins/google/vpcnetwork/openHadoopNameNodeWebUI.js"),
    openKibana: require(__dirname + "/plugins/google/vpcnetwork/openKibana.js"),
    openMongo: require(__dirname + "/plugins/google/vpcnetwork/openMongo.js"),
    openMsSQL: require(__dirname + "/plugins/google/vpcnetwork/openMsSQL.js"),
    openMySQL: require(__dirname + "/plugins/google/vpcnetwork/openMySQL.js"),
    openNetBIOS: require(__dirname +
      "/plugins/google/vpcnetwork/openNetBIOS.js"),
    openOracle: require(__dirname + "/plugins/google/vpcnetwork/openOracle.js"),
    openPostgreSQL: require(__dirname +
      "/plugins/google/vpcnetwork/openPostgreSQL.js"),
    openRDP: require(__dirname + "/plugins/google/vpcnetwork/openRDP.js"),
    openRedis: require(__dirname + "/plugins/google/vpcnetwork/openRedis.js"),
    openRPC: require(__dirname + "/plugins/google/vpcnetwork/openRPC.js"),
    openSalt: require(__dirname + "/plugins/google/vpcnetwork/openSalt.js"),
    openSMBoTCP: require(__dirname +
      "/plugins/google/vpcnetwork/openSMBoTCP.js"),
    openSMTP: require(__dirname + "/plugins/google/vpcnetwork/openSMTP.js"),
    openSQLServer: require(__dirname +
      "/plugins/google/vpcnetwork/openSQLServer.js"),
    openTelnet: require(__dirname + "/plugins/google/vpcnetwork/openTelnet.js"),
    openVNCClient: require(__dirname +
      "/plugins/google/vpcnetwork/openVNCClient.js"),
    openVNCServer: require(__dirname +
      "/plugins/google/vpcnetwork/openVNCServer.js"),
    openOracleAutoDataWarehouse: require(__dirname +
      "/plugins/google/vpcnetwork/openOracleAutoDataWarehouse.js"),
    multipleSubnets: require(__dirname +
      "/plugins/google/vpcnetwork/multipleSubnets.js"),
    defaultVpcInUse: require(__dirname +
      "/plugins/google/vpcnetwork/defaultVpcInUse.js"),
    flowLogsEnabled: require(__dirname +
      "/plugins/google/vpcnetwork/flowLogsEnabled.js"),
    privateAccessEnabled: require(__dirname +
      "/plugins/google/vpcnetwork/privateAccessEnabled.js"),
    dnsLoggingEnabled: require(__dirname +
      "/plugins/google/vpcnetwork/dnsLoggingEnabled.js"),
    openCustomPorts: require(__dirname +
      "/plugins/google/vpcnetwork/openCustomPorts.js"),
    firewallLoggingMetadata: require(__dirname +
      "/plugins/google/vpcnetwork/firewallLoggingMetadata.js"),
    openInternalWeb: require(__dirname +
      "/plugins/google/vpcnetwork/openInternalWeb.js"),
    openLDAPS: require(__dirname + "/plugins/google/vpcnetwork/openLDAPS.js"),
    openMemcached: require(__dirname +
      "/plugins/google/vpcnetwork/openMemcached.js"),
    openSNMP: require(__dirname + "/plugins/google/vpcnetwork/openSNMP.js"),
    openLDAP: require(__dirname + "/plugins/google/vpcnetwork/openLDAP.js"),
    openElasticsearch: require(__dirname +
      "/plugins/google/vpcnetwork/openElasticsearch.js"),
    openCassandraClient: require(__dirname +
      "/plugins/google/vpcnetwork/openCassandraClient.js"),
    openCassandraMonitoring: require(__dirname +
      "/plugins/google/vpcnetwork/openCassandraMonitoring.js"),
    openCassandraThrift: require(__dirname +
      "/plugins/google/vpcnetwork/openCassandraThrift.js"),
    openCassandraInternode: require(__dirname +
      "/plugins/google/vpcnetwork/openCassandraInternode.js"),

    instanceMaxCount: require(__dirname +
      "/plugins/google/compute/instanceMaxCount.js"),
    instancesMultiAz: require(__dirname +
      "/plugins/google/compute/instancesMultiAz.js"),
    autoscaleEnabled: require(__dirname +
      "/plugins/google/compute/autoscaleEnabled.js"),
    instanceLevelSSHOnly: require(__dirname +
      "/plugins/google/compute/instanceLevelSSHOnly.js"),
    instanceLeastPrivilege: require(__dirname +
      "/plugins/google/compute/instanceLeastPrivilege.js"),
    ipForwardingDisabled: require(__dirname +
      "/plugins/google/compute/ipForwardingDisabled.js"),
    connectSerialPortsDisabled: require(__dirname +
      "/plugins/google/compute/connectSerialPortsDisabled.js"),
    csekEncryptionEnabled: require(__dirname +
      "/plugins/google/compute/csekEncryptionEnabled.js"),
    osLoginEnabled: require(__dirname +
      "/plugins/google/compute/osLoginEnabled.js"),
    instancePublicAccess: require(__dirname +
      "/plugins/google/compute/instancePublicAccess.js"),
    instanceDefaultServiceAccount: require(__dirname +
      "/plugins/google/compute/instanceDefaultServiceAccount.js"),
    shieldedVmEnabled: require(__dirname +
      "/plugins/google/compute/shieldedVmEnabled.js"),
    instanceDeletionProtection: require(__dirname +
      "/plugins/google/compute/instanceDeletionProtection.js"),
    autoscaleMinCpuUtilization: require(__dirname +
      "/plugins/google/compute/autoscaleMinCpuUtilization.js"),
    instanceDesiredMachineTypes: require(__dirname +
      "/plugins/google/compute/instanceDesiredMachineTypes.js"),
    automaticRestartEnabled: require(__dirname +
      "/plugins/google/compute/automaticRestartEnabled.js"),
    instanceTemplateMachineTypes: require(__dirname +
      "/plugins/google/compute/instanceTemplateMachineTypes.js"),
    diskMultiAz: require(__dirname + "/plugins/google/compute/diskMultiAz.js"),
    persistentDisksAutoDelete: require(__dirname +
      "/plugins/google/compute/persistentDisksAutoDelete.js"),
    VMDisksCMKEncrypted: require(__dirname +
      "/plugins/google/compute/VMDisksCMKEncrypted.js"),
    instanceMaintenanceBehavior: require(__dirname +
      "/plugins/google/compute/instanceMaintenanceBehavior.js"),
    instancePreemptibility: require(__dirname +
      "/plugins/google/compute/instancePreemptibility.js"),
    diskInUse: require(__dirname + "/plugins/google/compute/diskInUse.js"),
    osLogin2FAEnabled: require(__dirname +
      "/plugins/google/compute/osLogin2FAEnabled.js"),
    diskAutomaticBackupEnabled: require(__dirname +
      "/plugins/google/compute/diskAutomaticBackupEnabled.js"),
    diskOldSnapshots: require(__dirname +
      "/plugins/google/compute/diskOldSnapshots.js"),
    frequentlyUsedSnapshots: require(__dirname +
      "/plugins/google/compute/frequentlyUsedSnapshots.js"),
    applicationConsistentSnapshots: require(__dirname +
      "/plugins/google/compute/applicationConsistentSnapshots.js"),
    deprecatedImages: require(__dirname +
      "/plugins/google/compute/deprecatedImages.js"),
    enableUsageExport: require(__dirname +
      "/plugins/google/compute/enableUsageExport.js"),
    instanceGroupAutoHealing: require(__dirname +
      "/plugins/google/compute/instanceGroupAutoHealing.js"),
    publicDiskImages: require(__dirname +
      "/plugins/google/compute/publicDiskImages.js"),
    snapshotLabelsAdded: require(__dirname +
      "/plugins/google/compute/snapshotLabelsAdded.js"),
    diskLabelsAdded: require(__dirname +
      "/plugins/google/compute/diskLabelsAdded.js"),
    imageLabelsAdded: require(__dirname +
      "/plugins/google/compute/imageLabelsAdded.js"),
    instanceLabelsAdded: require(__dirname +
      "/plugins/google/compute/instanceLabelsAdded.js"),

    keyRotation: require(__dirname +
      "/plugins/google/cryptographickeys/keyRotation.js"),
    keyProtectionLevel: require(__dirname +
      "/plugins/google/cryptographickeys/keyProtectionLevel.js"),
    kmsPublicAccess: require(__dirname +
      "/plugins/google/cryptographickeys/kmsPublicAccess.js"),

    dbRestorable: require(__dirname + "/plugins/google/sql/dbRestorable.js"),
    dbAutomatedBackups: require(__dirname +
      "/plugins/google/sql/dbAutomatedBackups.js"),
    dbMultiAz: require(__dirname + "/plugins/google/sql/dbMultiAz.js"),
    dbPubliclyAccessible: require(__dirname +
      "/plugins/google/sql/dbPubliclyAccessible.js"),
    dbSSLEnabled: require(__dirname + "/plugins/google/sql/dbSSLEnabled.js"),
    anyHostRootAccess: require(__dirname +
      "/plugins/google/sql/anyHostRootAccess.js"),
    postgresqlLogMinError: require(__dirname +
      "/plugins/google/sql/postgresqlLogMinError.js"),
    postgresqlLogTempFiles: require(__dirname +
      "/plugins/google/sql/postgresqlLogTempFiles.js"),
    postgresqlLogMinDuration: require(__dirname +
      "/plugins/google/sql/postgresqlLogMinDuration.js"),
    postgresqlLogLockWaits: require(__dirname +
      "/plugins/google/sql/postgresqlLogLockWaits.js"),
    mysqlLocalInfile: require(__dirname +
      "/plugins/google/sql/mysqlLocalInfile.js"),
    postgresqlLogConnections: require(__dirname +
      "/plugins/google/sql/postgresqlLogConnections.js"),
    postgresqlLogDisconnections: require(__dirname +
      "/plugins/google/sql/postgresqlLogDisconnections.js"),
    postgresqlLogCheckpoints: require(__dirname +
      "/plugins/google/sql/postgresqlLogCheckpoints.js"),
    sqlNoPublicIps: require(__dirname +
      "/plugins/google/sql/sqlNoPublicIps.js"),
    sqlCrossDbOwnership: require(__dirname +
      "/plugins/google/sql/sqlCrossDbOwnership.js"),
    sqlContainedDatabaseAuth: require(__dirname +
      "/plugins/google/sql/sqlContainedDatabaseAuth.js"),
    postgresqlMaxConnections: require(__dirname +
      "/plugins/google/sql/postgresqlMaxConnections.js"),
    mysqlSlowQueryLog: require(__dirname +
      "/plugins/google/sql/mysqlSlowQueryLog.js"),
    storageAutoIncreaseEnabled: require(__dirname +
      "/plugins/google/sql/storageAutoIncreaseEnabled.js"),
    serverCertificateRotation: require(__dirname +
      "/plugins/google/sql/serverCertificateRotation.js"),
    sqlCMKEncryption: require(__dirname +
      "/plugins/google/sql/sqlCMKEncryption.js"),
    mysqlLatestVersion: require(__dirname +
      "/plugins/google/sql/mysqlLatestVersion.js"),
    postgresqlLatestVersion: require(__dirname +
      "/plugins/google/sql/postgresqlLatestVersion.js"),
    sqlInstanceLabelsAdded: require(__dirname +
      "/plugins/google/sql/sqlInstanceLabelsAdded.js"),

    bucketVersioning: require(__dirname +
      "/plugins/google/storage/bucketVersioning.js"),
    bucketLogging: require(__dirname +
      "/plugins/google/storage/bucketLogging.js"),
    bucketAllUsersPolicy: require(__dirname +
      "/plugins/google/storage/bucketAllUsersPolicy.js"),
    bucketRetentionPolicy: require(__dirname +
      "/plugins/google/storage/bucketRetentionPolicy.js"),
    bucketUniformAccess: require(__dirname +
      "/plugins/google/storage/bucketUniformAccess.js"),
    bucketLifecycleConfigured: require(__dirname +
      "/plugins/google/storage/bucketLifecycleConfigured.js"),
    bucketEncryption: require(__dirname +
      "/plugins/google/storage/bucketEncryption.js"),
    bucketLabelsAdded: require(__dirname +
      "/plugins/google/storage/bucketLabelsAdded.js"),

    clbHttpsOnly: require(__dirname + "/plugins/google/clb/clbHttpsOnly.js"),
    clbNoInstances: require(__dirname +
      "/plugins/google/clb/clbNoInstances.js"),
    clbSecurityPolicyEnabled: require(__dirname +
      "/plugins/google/clb/clbSecurityPolicyEnabled.js"),
    clbCDNEnabled: require(__dirname + "/plugins/google/clb/clbCDNEnabled.js"),

    serviceLimits: require(__dirname + "/plugins/google/iam/serviceLimits.js"),
    serviceAccountAdmin: require(__dirname +
      "/plugins/google/iam/serviceAccountAdmin.js"),
    serviceAccountUser: require(__dirname +
      "/plugins/google/iam/serviceAccountUser.js"),
    serviceAccountSeparation: require(__dirname +
      "/plugins/google/iam/serviceAccountSeparation.js"),
    kmsUserSeparation: require(__dirname +
      "/plugins/google/iam/kmsUserSeparation.js"),
    serviceAccountKeyRotation: require(__dirname +
      "/plugins/google/iam/serviceAccountKeyRotation.js"),
    serviceAccountManagedKeys: require(__dirname +
      "/plugins/google/iam/serviceAccountManagedKeys.js"),
    corporateEmailsOnly: require(__dirname +
      "/plugins/google/iam/corporateEmailsOnly.js"),

    serviceAccountTokenCreator: require(__dirname +
      "/plugins/google/iam/serviceAccountTokenCreator.js"),
    memberAdmin: require(__dirname + "/plugins/google/iam/memberAdmin.js"),

    apiKeyRotation: require(__dirname +
      "/plugins/google/api/apiKeyRotation.js"),
    apiKeyApplicationRestriction: require(__dirname +
      "/plugins/google/api/apiKeyApplicationRestriction.js"),

    privateEndpoint: require(__dirname +
      "/plugins/google/kubernetes/privateEndpoint.js"),
    monitoringEnabled: require(__dirname +
      "/plugins/google/kubernetes/monitoringEnabled.js"),
    clusterLeastPrivilege: require(__dirname +
      "/plugins/google/kubernetes/clusterLeastPrivilege.js"),
    loggingEnabled: require(__dirname +
      "/plugins/google/kubernetes/loggingEnabled.js"),
    aliasIpRangesEnabled: require(__dirname +
      "/plugins/google/kubernetes/aliasIpRangesEnabled.js"),
    legacyAuthorizationDisabled: require(__dirname +
      "/plugins/google/kubernetes/legacyAuthorizationDisabled.js"),
    masterAuthorizedNetwork: require(__dirname +
      "/plugins/google/kubernetes/masterAuthorizedNetwork.js"),
    clusterLabelsAdded: require(__dirname +
      "/plugins/google/kubernetes/clusterLabelsAdded.js"),
    webDashboardDisabled: require(__dirname +
      "/plugins/google/kubernetes/webDashboardDisabled.js"),
    defaultServiceAccount: require(__dirname +
      "/plugins/google/kubernetes/defaultServiceAccount.js"),
    cosImageEnabled: require(__dirname +
      "/plugins/google/kubernetes/cosImageEnabled.js"),
    autoNodeRepairEnabled: require(__dirname +
      "/plugins/google/kubernetes/autoNodeRepairEnabled.js"),
    autoNodeUpgradesEnabled: require(__dirname +
      "/plugins/google/kubernetes/autoNodeUpgradesEnabled.js"),
    networkPolicyEnabled: require(__dirname +
      "/plugins/google/kubernetes/networkPolicyEnabled.js"),
    podSecurityPolicyEnabled: require(__dirname +
      "/plugins/google/kubernetes/podSecurityPolicyEnabled.js"),
    privateClusterEnabled: require(__dirname +
      "/plugins/google/kubernetes/privateClusterEnabled.js"),
    basicAuthenticationDisabled: require(__dirname +
      "/plugins/google/kubernetes/basicAuthenticationDisabled.js"),
    kubernetesAlphaDisabled: require(__dirname +
      "/plugins/google/kubernetes/kubernetesAlphaDisabled.js"),
    shieldedNodes: require(__dirname +
      "/plugins/google/kubernetes/shieldedNodes.js"),
    integrityMonitoringEnabled: require(__dirname +
      "/plugins/google/kubernetes/integrityMonitoringEnabled.js"),
    secureBootEnabled: require(__dirname +
      "/plugins/google/kubernetes/secureBootEnabled.js"),
    nodeEncryption: require(__dirname +
      "/plugins/google/kubernetes/nodeEncryption.js"),
    clusterEncryption: require(__dirname +
      "/plugins/google/kubernetes/clusterEncryption.js"),

    dnsSecEnabled: require(__dirname + "/plugins/google/dns/dnsSecEnabled.js"),
    dnsSecSigningAlgorithm: require(__dirname +
      "/plugins/google/dns/dnsSecSigningAlgorithm.js"),
    dnsZoneLabelsAdded: require(__dirname +
      "/plugins/google/dns/dnsZoneLabelsAdded.js"),

    auditLoggingEnabled: require(__dirname +
      "/plugins/google/logging/auditLoggingEnabled.js"),
    projectOwnershipLogging: require(__dirname +
      "/plugins/google/logging/projectOwnershipLogging.js"),
    storagePermissionsLogging: require(__dirname +
      "/plugins/google/logging/storagePermissionsLogging.js"),
    sqlConfigurationLogging: require(__dirname +
      "/plugins/google/logging/sqlConfigurationLogging.js"),
    auditConfigurationLogging: require(__dirname +
      "/plugins/google/logging/auditConfigurationLogging.js"),
    customRoleLogging: require(__dirname +
      "/plugins/google/logging/customRoleLogging.js"),
    vpcFirewallRuleLogging: require(__dirname +
      "/plugins/google/logging/vpcFirewallRuleLogging.js"),
    vpcNetworkRouteLogging: require(__dirname +
      "/plugins/google/logging/vpcNetworkRouteLogging.js"),
    vpcNetworkLogging: require(__dirname +
      "/plugins/google/logging/vpcNetworkLogging.js"),
    logSinksEnabled: require(__dirname +
      "/plugins/google/logging/logSinksEnabled.js"),

    datasetAllUsersPolicy: require(__dirname +
      "/plugins/google/bigquery/datasetAllUsersPolicy.js"),
    tablesCMKEncrypted: require(__dirname +
      "/plugins/google/bigquery/tablesCMKEncrypted.js"),
    datasetLabelsAdded: require(__dirname +
      "/plugins/google/bigquery/datasetLabelsAdded.js"),

    topicEncryption: require(__dirname +
      "/plugins/google/pubsub/topicEncryption.js"),
    deadLetteringEnabled: require(__dirname +
      "/plugins/google/pubsub/deadLetteringEnabled.js"),
    topicLabelsAdded: require(__dirname +
      "/plugins/google/pubsub/topicLabelsAdded.js"),

    dataflowHangedJobs: require(__dirname +
      "/plugins/google/dataflow/dataflowHangedJobs.js"),
    dataflowJobsEncryption: require(__dirname +
      "/plugins/google/dataflow/dataflowJobsEncryption.js"),

    deleteExpiredDeployments: require(__dirname +
      "/plugins/google/deploymentmanager/deleteExpiredDeployments.js"),

    instanceNodeCount: require(__dirname +
      "/plugins/google/spanner/instanceNodeCount.js"),

    httpTriggerRequireHttps: require(__dirname +
      "/plugins/google/cloudfunctions/httpTriggerRequireHttps.js"),
    ingressAllTrafficDisabled: require(__dirname +
      "/plugins/google/cloudfunctions/ingressAllTrafficDisabled.js"),
    cloudFunctionLabelsAdded: require(__dirname +
      "/plugins/google/cloudfunctions/cloudFunctionLabelsAdded.js"),

    computeAllowedExternalIPs: require(__dirname +
      "/plugins/google/cloudresourcemanager/computeAllowedExternalIPs.js"),
    disableAutomaticIAMGrants: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableAutomaticIAMGrants.js"),
    disableGuestAttributes: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableGuestAttributes.js"),
    disableSerialPortAccess: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableSerialPortAccess.js"),
    disableKeyCreation: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableKeyCreation.js"),
    disableKeyUpload: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableKeyUpload.js"),
    disableIdentityClusterCreation: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableIdentityClusterCreation.js"),
    detailedAuditLoggingMode: require(__dirname +
      "/plugins/google/cloudresourcemanager/detailedAuditLoggingMode.js"),
    uniformBucketLevelAccess: require(__dirname +
      "/plugins/google/cloudresourcemanager/uniformBucketLevelAccess.js"),
    requireOsLogin: require(__dirname +
      "/plugins/google/cloudresourcemanager/requireOsLogin.js"),
    restrictAuthorizedNetworks: require(__dirname +
      "/plugins/google/cloudresourcemanager/restrictAuthorizedNetworks.js"),
    disableDefaultEncryption: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableDefaultEncryption.js"),
    restrictLoadBalancerCreation: require(__dirname +
      "/plugins/google/cloudresourcemanager/restrictLoadBalancerCreation.js"),
    restrictSharedVPCSubnetworks: require(__dirname +
      "/plugins/google/cloudresourcemanager/restrictSharedVPCSubnetworks.js"),
    restrictVPCPeering: require(__dirname +
      "/plugins/google/cloudresourcemanager/restrictVPCPeering.js"),
    restrictVPNPeerIPs: require(__dirname +
      "/plugins/google/cloudresourcemanager/restrictVPNPeerIPs.js"),
    disableVMIPForwarding: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableVMIPForwarding.js"),
    trustedImageProjects: require(__dirname +
      "/plugins/google/cloudresourcemanager/trustedImageProjects.js"),
    skipDefaultNetworkCreation: require(__dirname +
      "/plugins/google/cloudresourcemanager/skipDefaultNetworkCreation.js"),
    locationBasedRestriction: require(__dirname +
      "/plugins/google/cloudresourcemanager/locationBasedRestriction.js"),
    disableServiceAccountCreation: require(__dirname +
      "/plugins/google/cloudresourcemanager/disableServiceAccountCreation.js"),

    dataprocClusterLabelsAdded: require(__dirname +
      "/plugins/google/dataproc/dataprocClusterLabelsAdded.js"),
    hadoopSecureModeEnabled: require(__dirname +
      "/plugins/google/dataproc/hadoopSecureModeEnabled.js"),
    dataprocClusterEncryption: require(__dirname +
      "/plugins/google/dataproc/dataprocClusterEncryption.js"),

    bigtableInstanceLabelsAdded: require(__dirname +
      "/plugins/google/bigtable/bigtableInstanceLabelsAdded.js"),
  },
  alibaba: {
    passwordMinLength: require(__dirname +
      "/plugins/alibaba/ram/passwordMinLength.js"),
    passwordRequiresNumbers: require(__dirname +
      "/plugins/alibaba/ram/passwordRequiresNumbers.js"),
    passwordRequiresSymbols: require(__dirname +
      "/plugins/alibaba/ram/passwordRequiresSymbols.js"),
    passwordRequiresLowercase: require(__dirname +
      "/plugins/alibaba/ram/passwordRequiresLowercase.js"),
    inactiveUserDisabled: require(__dirname +
      "/plugins/alibaba/ram/inactiveUserDisabled.js"),
    passwordRequiresUppercase: require(__dirname +
      "/plugins/alibaba/ram/passwordRequiresUppercase.js"),
    usersMfaEnabled: require(__dirname +
      "/plugins/alibaba/ram/usersMfaEnabled.js"),
    accessKeysRotation: require(__dirname +
      "/plugins/alibaba/ram/accessKeysRotation.js"),
    passwordNoReuse: require(__dirname +
      "/plugins/alibaba/ram/passwordNoReuse.js"),
    passwordExpiry: require(__dirname +
      "/plugins/alibaba/ram/passwordExpiry.js"),
    passwordBlockLogon: require(__dirname +
      "/plugins/alibaba/ram/passwordBlockLogon.js"),
    ramPolicyAttachments: require(__dirname +
      "/plugins/alibaba/ram/ramPolicyAttachments.js"),
    ramAdminPolicy: require(__dirname +
      "/plugins/alibaba/ram/ramAdminPolicy.js"),

    openSSH: require(__dirname + "/plugins/alibaba/ecs/openSSH.js"),
    openRDP: require(__dirname + "/plugins/alibaba/ecs/openRDP.js"),
    openDNS: require(__dirname + "/plugins/alibaba/ecs/openDNS.js"),
    openCIFS: require(__dirname + "/plugins/alibaba/ecs/openCIFS.js"),
    openDocker: require(__dirname + "/plugins/alibaba/ecs/openDocker.js"),
    openPostgreSQL: require(__dirname +
      "/plugins/alibaba/ecs/openPostgreSQL.js"),
    openElasticsearch: require(__dirname +
      "/plugins/alibaba/ecs/openElasticsearch.js"),
    openFTP: require(__dirname + "/plugins/alibaba/ecs/openFTP.js"),
    openHadoopNameNode: require(__dirname +
      "/plugins/alibaba/ecs/openHadoopNameNode.js"),
    openHadoopNameNodeWebUI: require(__dirname +
      "/plugins/alibaba/ecs/openHadoopNameNodeWebUI.js"),
    openKibana: require(__dirname + "/plugins/alibaba/ecs/openKibana.js"),
    openMySQL: require(__dirname + "/plugins/alibaba/ecs/openMySQL.js"),
    openNetBIOS: require(__dirname + "/plugins/alibaba/ecs/openNetBIOS.js"),
    openOracle: require(__dirname + "/plugins/alibaba/ecs/openOracle.js"),
    dataDisksEncrypted: require(__dirname +
      "/plugins/alibaba/ecs/dataDisksEncrypted.js"),
    openCustomPorts: require(__dirname +
      "/plugins/alibaba/ecs/openCustomPorts.js"),
    openOracleAutoDataWarehouse: require(__dirname +
      "/plugins/alibaba/ecs/openOracleAutoDataWarehouse.js"),
    openSalt: require(__dirname + "/plugins/alibaba/ecs/openSalt.js"),
    openSMTP: require(__dirname + "/plugins/alibaba/ecs/openSMTP.js"),
    openSMBoTCP: require(__dirname + "/plugins/alibaba/ecs/openSMBoTCP.js"),
    openSQLServer: require(__dirname + "/plugins/alibaba/ecs/openSQLServer.js"),
    openTelnet: require(__dirname + "/plugins/alibaba/ecs/openTelnet.js"),
    openVNCClient: require(__dirname + "/plugins/alibaba/ecs/openVNCClient.js"),
    openVNCServer: require(__dirname + "/plugins/alibaba/ecs/openVNCServer.js"),
    openAllPortsProtocols: require(__dirname +
      "/plugins/alibaba/ecs/openAllPortsProtocols.js"),
    systemDisksEncrypted: require(__dirname +
      "/plugins/alibaba/ecs/systemDisksEncrypted.js"),

    bucketLoggingEnabled: require(__dirname +
      "/plugins/alibaba/oss/bucketLoggingEnabled.js"),
    bucketPayByRequester: require(__dirname +
      "/plugins/alibaba/oss/bucketPayByRequester.js"),
    ossBucketPrivate: require(__dirname +
      "/plugins/alibaba/oss/ossBucketPrivate.js"),
    ossBucketLifecycle: require(__dirname +
      "/plugins/alibaba/oss/ossBucketLifecycle.js"),
    bucketCmkEncrypted: require(__dirname +
      "/plugins/alibaba/oss/bucketCmkEncrypted.js"),
    ossBucketVersioning: require(__dirname +
      "/plugins/alibaba/oss/ossBucketVersioning.js"),
    ossBucketTransferAcceleration: require(__dirname +
      "/plugins/alibaba/oss/ossBucketTransferAcceleration.js"),
    bucketCrossRegionReplication: require(__dirname +
      "/plugins/alibaba/oss/bucketCrossRegionReplication.js"),

    ossBucketIpRestriction: require(__dirname +
      "/plugins/alibaba/oss/ossBucketIpRestriction.js"),
    ossBucketSecureTransport: require(__dirname +
      "/plugins/alibaba/oss/ossBucketSecureTransport.js"),

    rdsLogDuration: require(__dirname +
      "/plugins/alibaba/rds/rdsLogDuration.js"),
    rdsSslEncryptionEnabled: require(__dirname +
      "/plugins/alibaba/rds/rdsSslEncryptionEnabled.js"),
    rdsAuditingEnabled: require(__dirname +
      "/plugins/alibaba/rds/rdsAuditingEnabled.js"),
    rdsPublicAccess: require(__dirname +
      "/plugins/alibaba/rds/rdsPublicAccess.js"),
    rdsLogConnectionEnabled: require(__dirname +
      "/plugins/alibaba/rds/rdsLogConnectionEnabled.js"),
    rdsLogDisconnectionsEnabled: require(__dirname +
      "/plugins/alibaba/rds/rdsLogDisconnectionsEnabled.js"),
    rdsSqlAuditRetentionPeriod: require(__dirname +
      "/plugins/alibaba/rds/rdsSqlAuditRetentionPeriod.js"),
    rdsTdeEnabled: require(__dirname + "/plugins/alibaba/rds/rdsTdeEnabled.js"),

    actiontrailGlobalExportLogs: require(__dirname +
      "/plugins/alibaba/actiontrail/actiontrailGlobalExportLogs.js"),
    actiontrailBucketPrivate: require(__dirname +
      "/plugins/alibaba/actiontrail/actiontrailBucketPrivate.js"),

    apiProtocol: require(__dirname +
      "/plugins/alibaba/apigateway/apiProtocol.js"),
    apiGroupTlsVersion: require(__dirname +
      "/plugins/alibaba/apigateway/apiGroupTlsVersion.js"),
    networkPolicyEnabled: require(__dirname +
      "/plugins/alibaba/ack/networkPolicyEnabled.js"),

    securityCenterEdition: require(__dirname +
      "/plugins/alibaba/securitycenter/securityCenterEdition.js"),
    securityAgentInstalled: require(__dirname +
      "/plugins/alibaba/securitycenter/securityAgentInstalled.js"),
    securityNotificationsEnabled: require(__dirname +
      "/plugins/alibaba/securitycenter/securityNotificationsEnabled.js"),
  },
};
