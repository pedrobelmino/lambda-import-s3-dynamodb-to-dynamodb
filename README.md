<!--
title: Função lambda para importar json do desenho Dragon Ball Z
description: A função lamda é disparada quando um arquivo .json é inserido no bucket S3
layout: Doc
framework: v2
platform: AWS
language: nodeJS
authorLink: 'https://github.com/pedrobelmino'
authorName: 'Pedro Belmino'
-->
# Função lambda simples para importar json do desenho Dragon Ball Z para o DynamoDB

Esse exemplo demonstra como processar arquivos do tipo json, armazenados em bucket S3 e persistir os dados em uma base DynamodDB

## Setup

- Edite o arquivo `serverless.yml` e escolhe o nome dos buckets a serem utilizados
```yml
environment:
 S3_DBZ_INPUT_BUCKET: belmino.dbz.s3.jsoninput
 S3_DBZ_PROCESSED_BUCKET: belmino.dbz.s3.jsonprocessed
 DYNAMODB_TABLE: belmino.dbz.dynamodb
```

- Declare também sua região, caso a região desejada não seja a us-east-1

## Deploy

Para realizar o deploy simplesmente execute o comando abaixo.

```bash
serverless deploy
```

O resultado esperado é: 

```bash
Serverless: Packaging service...
Serverless: Excluding development dependencies...
Serverless: Uploading CloudFormation file to S3...
Serverless: Uploading artifacts...
Serverless: Uploading service import-s3-to-dynamodb.zip file to S3 (32.44 KB)...
Serverless: Validating template...
Serverless: Updating Stack...
Serverless: Checking Stack update progress...
.........
Serverless: Stack update finished...
Service Information
service: import-s3-to-dynamodb
stage: dev
region: us-east-1
stack: import-s3-to-dynamodb-dev
resources: 10
api keys:
  None
endpoints:
  None
functions:
  import: import-s3-to-dynamodb-dev-import
layers:
  None
```

## Uso

- Faça o upload do arquivo data/dbz.json para o bucket configurado no enviroment S3_DBZ_INPUT_BUCKET. Você pode fazer isso através do comando abaixo.
```bash
aws s3 sync data/ s3://belmino.dbz.s3.jsoninput
```

## Resultado esperado
Verifique se os dados foram armazenados no DynamoDB
```bash
aws dynamodb scan --table-name belmino.dbz.dynamodb
```
