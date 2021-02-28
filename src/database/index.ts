import pg from 'pg';

const pool = new pg.Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'simple_api',
  password: 'password',
  port: 5432,
})

export default pool;