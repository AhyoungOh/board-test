const dotenv = require('dotenv');

dotenv.config();

const dbConfig = {
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
};

// URI = URL + ?data=data,
const getDBUri = () => {
  const localUri = `mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`;
  return localUri;
};
module.exports = { getDBUri };
