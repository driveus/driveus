const pg = require('pg');
require('dotenv').config({path: '../.env'});
pg.defaults.ssl = true;


const config = {
                user: process.env.DB_USER ,
                password: process.env.DB_PASS ,
                host: process.env.DB_HOST,
                port: process.env.DB_PORT,
                database: process.env.DB_DATABASE,
                max: 10,
                idleTimeoutMillis: 30000,
               };

const pool = new pg.Pool(config);

pool.on('error', function(e) {
  console.log(e);
})

export default db;
//You can do things like this with it
//db.query('select * from UberHist where data1 like $1', ['abc']).then((res) => {console.log(res)})