const cp = require('child_process')

const execOptions = {
    cwd: null,
    env: null,
    encoding: 'utf8',
    timeout: 0,
    maxBuffer: 200 * 1024,
    killSignal: 'SIGTERM'
}

// async callback-style
cp.exec('ls -l', execOptions, (err, stdout, stderr) => {
    console.log('#1. exec')
    console.log(stdout)
})

// sync
try {
    const data = cp.execSync('ls -l', execOptions)
    console.log('#2. exec sync')
    console.log(data)
} catch (err) {
    console.error(data.toString())
}

const spawnOptions = {
    cwd: null,
    env: null,
    detached: false
}

// spawn async
const ls = cp.spawn('ls', ['-l'], spawnOptions)

ls.stdout.on('data', stdout => {
    console.log('#3. spawn')
    console.log(stdout.toString())
})

ls.stderr.on('data', stderr => {
    console.log(stderr.toString())
})

ls.on('close', code => {
    console.log(code)
})

const { stdout, stderr} = cp.spawnSync('ls', ['-l'], spawnOptions)
console.log('#4. spawn sync')
console.log(stdout.toString())
// if (stderr) console.log(stderr)