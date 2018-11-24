const http = require('http')

const createRouter = port => {
    const api = {}
    const routes = {}
    const methods = ['GET', 'POST', 'OPTIONS']
    const interceptors = []

    methods.forEach(method => {
        routes[method] = {}
        api[method.toLowerCase()] = (path, fn) => {
            routes[method][path] = fn
        }
    })

    api.interceptor = interceptor => {
        interceptors.push(interceptor)
    }

    const handleInterceptors = (number, req, res) => {
        let interceptor = interceptors[number]
        if (!interceptor) return
        interceptor(req, res, () => {
            handleInterceptors(++number, req, res)
        })
    }

    const handleBody = (req, res, next) => {
        var body = []

        req.on('data', chunk => {
            console.log(chunk)
            body.push(chunk)
        })

        req.on('end', () => {
            req.body = Buffer.concat(body).toString()
            next()
        })
    }

    http.createServer((req, res) => {
        handleBody(req, res, () => {
            handleInterceptors(0, req, res)
            if (!routes[req.method][req.url]) {
                res.statusCode = 404
                return res.end()
            }
            routes[req.method][req.url](req, res)
        })
    }).listen(port)

    return api
}

module.exports = createRouter
