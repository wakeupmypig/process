module.exports = {
  apps : [{
    name: 'worker',
    script: 'worker.js',
    // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],
  // 发布到自己服务器上 pm2 
  deploy : {
    production : {
      user : 'root',
      host : '39.106.14.146',
      ref  : 'origin/master',
      repo : 'https://github.com/wakeupmypig/process.git',
      path : '/home',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
