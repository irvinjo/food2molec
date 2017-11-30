
var http = require('http');
const path = require('path');
var url = require('url');
var fs = require('fs');
const express = require('express');
const app = express();
const server = http.createServer(app);

const parseArgs = require('minimist');
const args = parseArgs(process.argv.slice(2));
const { name = 'default', port = '8080' } = args;

app.use(express.static(path.join(__dirname, 'public')));

server.listen(+port, '0.0.0.0', (err) => {
    if (err) {
        console.log(err.stack);
        return;
    }

    console.log(`Node [$(name)] listens on http://127.0.0.1:$(port).`);
});
