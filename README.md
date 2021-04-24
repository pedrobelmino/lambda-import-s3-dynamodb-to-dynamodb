# lambda-import-s3-to-dynamodb
- install awscli
- configure awscli
- install serveless
- enable debug > SLS_DEBUG=*
- generate event > sls generate-event -t aws:s3
- Testar processamento > aws s3 sync data/ s3://belmino.dbz.s3.jsoninput
- aws dynamodb scan --table-name belmino.dbz.dynamodb


TODO
- invoke local > sls invoke local --function import -p event/s3-event.json
-- Fazer funcionar dynamodb local


links para monitorar recursos
https://s3.console.aws.amazon.com/s3/home?region=us-east-1
https://console.aws.amazon.com/dynamodb/home?region=us-east-1
https://console.aws.amazon.com/cloudformation/home?region=us-east-1
https://console.aws.amazon.com/cloudwatch/home?region=us-east-1
https://console.aws.amazon.com/lambda/home?region=us-east-1#/functions



