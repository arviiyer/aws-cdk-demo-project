import * as cdk from 'aws-cdk-lib';
import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class AwsCdkDemoProjectStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    
    //L1 and L2 Construct of an S3 Bucket
    const level1S3Bucket = new CfnBucket(this, 'MyFisrstLevel1ConstructBucket', {
      versioningConfiguration: {
        status: "Enabled"
      }
    });

    const level2S3Bucket = new Bucket(this, 'MyFisrstLevel2ConstructBucket', {
      versioned: true
    });
  }
}
