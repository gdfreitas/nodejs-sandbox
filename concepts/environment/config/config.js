const config = Object.freeze({
    production: {
        env: 'production',
        host: 'api.domain.com',
        secret: 'hr4#*5^z',
        port: '3000'
    },
    default: {
        env: 'default',
        host: 'localhost',
        secret: '123456',
        port: '9000'
    }
})

exports.get = function get(env) {
    return config[env] || config.default;
}