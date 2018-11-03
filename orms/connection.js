module.exports = {
    host: process.env.PGHOST || 'localhost',
    port: process.env.PGPORT || '5432',
    database: process.env.PGDATABASE || process.env.USER || 'orm-db',
    user: process.env.PGUSER || process.env.USER || 'orm-user',
    password: process.env.PGPASSWORD || 'pw1234'
}
