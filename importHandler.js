'use strict';

const uuid = require('uuid');
const aws = require('aws-sdk');
const dynamodb = require('./dynamodb');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

module.exports.importDBZJsonToDynamodDB = (event, context, callback) => {
  console.log(event);
  const bucket = event.Records[0].s3.bucket.name;
  const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, ' '));
  const params = {
      Bucket: bucket,
      Key: key,
  };
  s3.getObject(params, (err, data) => {
      if (err) {
          console.log(err);
          const message = `Error getting object ${key} from bucket ${bucket}. Make sure they exist and your bucket is in the same region as this function.`;
          console.log(message);
          callback(message);
      } else {
          var charactersArray = JSON.parse(data.Body.toString())['characters'];
          charactersArray.forEach(element => {
            const timestamp = new Date().getTime();
            const paramsDb = {
              TableName: process.env.DYNAMODB_TABLE,
              Item: {
                name: element.id,
                id: uuid.v1()
              },
            };
            dynamodb.put(paramsDb, (error) => {
              // handle potential errors
              if (error) {
                console.error(error);
              }
            })

          });
          callback(null, data.ContentType);
      }
  });
};
