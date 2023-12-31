import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'
import * as sqs from 'aws-cdk-lib/aws-sqs'

export class SqsStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)

    new sqs.Queue(this, 'AwsCdkConstructsQueue', {
      visibilityTimeout: cdk.Duration.seconds(300)
    })
    
  }
}
