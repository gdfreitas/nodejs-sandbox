module.exports = {
    host: process.env.PGHOST || 'db' || 'localhost',
    user: process.env.PGUSER || process.env.USER || 'postgres',
    password:  process.env.PGPASSWORD || 'postgres',
    database: process.env.PGDATABASE || process.env.USER || 'nodejs_postgres',
    port: process.env.PGPORT || '5432',
}