

var shell = require('shelljs');

shell.echo("build start")
shell.exec('webpack');
shell.exec('start http://localhost:8888');
shell.exec("node server/server.js")
