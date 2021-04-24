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
