const env  = require('dotenv');

env.config();

module.exports = {
  region:          process.env.AWS_REGION,
  accessKeyId:     process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
};
