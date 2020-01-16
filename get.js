const http = require('http');
setInterval(() => {
    http.get({
        pathname: '/',
        host: 'localhost',
        port: 3000
    }, function (res) {
        res.on('data', function (data) {
            console.log(data.toString())
        })
    })
}, 1000);
    