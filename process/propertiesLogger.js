module.exports.log = option => {
    switch (option) {
        case 'p':
            console.log('pid:', process.pid)
            break;
        case 't':
            console.log('title:', process.title)
            break;
        case 'a':
            console.log('arch:', process.arch)
            break;
        case 'p':
            console.log('platform:', process.platform)
            break;
        case 'v':
            console.log('versions', process.versions)
            break;
        case 'e':
            console.log('env', process.env)
            break;
        case 'm':
            console.log('memoryUsage', process.memoryUsage()) //[Node.js Documentation | Process | Memory Usage](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_process_memoryusage)
            break;
        case 'u':
            console.log('uptime', process.uptime())
            break;
        case 'q':
            process.exit(1) // [Node.js Documentation | Process | Exit Codes](https://nodejs.org/dist/latest-v8.x/docs/api/process.html#process_exit_codes)
            break;
    }
}