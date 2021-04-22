'use strict';

const aws = require('aws-sdk');

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
          console.log('CONTENT TYPE:', data.ContentType);
          console.log('DATA:', data.Body.toString());
          console.log('Iterando');
          callback(null, data.ContentType);
      }
  });
};
