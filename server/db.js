const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'postgres',
  password: 'n0f4ld1k03',
  host: 'localhost',
  port: 5432,
  database: 'perntodo',
});

module.exports = pool;
