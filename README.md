# lambda-import-s3-to-dynamodb
- install awscli
- configure awscli
- install serveless
- create buckets
aws s3 mb s3://belmino.lambda.code
aws s3 mb s3://belmino.dbz.s3.jsoninput
aws s3 mb s3://belmino.dbz.s3.jsonprocessed
- enable debug > SLS_DEBUG=*
- generate event > sls generate-event -t aws:s3
- invoke local > sls invoke local --function import -p event/s3-event.json
- create dynamodb table > https://docs.aws.amazon.com/cli/latest/userguide/cli-services-dynamodb.html#cli-services-dynamodb-using
aws dynamodb create-table \
    --table-name belmino.dbz.dynamodb \
    --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S \
    --key-schema AttributeName=id,KeyType=HASH AttributeName=name,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=1,WriteCapacityUnits=1