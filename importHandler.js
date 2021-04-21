console.log('Loading function');
'use strict';

const aws = require('aws-sdk');

const s3 = new aws.S3({ apiVersion: '2006-03-01' });

module.exports.importDBZJsonToDynamodDB = async (event, context, callback) => {
  const records = event.Records;

  console.log(event);

  
};
