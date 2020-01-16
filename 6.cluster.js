const cluster = require('cluster');
const http  =require('http')
const cpus = require('os').cpus().length
cluster.setupMaster({
    exec: 'worker.js',
    silent: true
  });

cluster.on('exit', (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
    cluster.fork()
});
for (let i = 0; i < cpus; i++) {
    let cp =cluster.fork();
}

