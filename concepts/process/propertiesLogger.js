module.exports.log = option => {
    switch (option) {
    case 'pid':
        console.log('pid:', process.pid)
        break
    case 't':
        console.log('title:', process.title)
        break
    case 'a':
        console.log('arch:', process.arch)
        break
    case 'plat':
        console.log('platform:', process.platform)
        break
    case 'v':
        console.log('versions', process.versions)
        break
    case 'e':
        console.log('env', process.env)
        break
    case 'm':
        console.log('memoryUsage', process.memoryUsage())
        break
    case 'u':
        console.log('uptime', process.uptime())
        break
    case 'q':
        process.exit(1)
    }
}
