const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Laboo Beauty Bar',
  password: 'Pandasmatt3r35',
  port: 5432,
});

module.exports = pool;