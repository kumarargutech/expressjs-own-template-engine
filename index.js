var express = require('express');
var routes = require('./routes');
var fs = require('fs');

var app = express();

app.engine('mytemp', (filepath, options, callback) => {
    fs.readFile(filepath, (err, content) => {
        if(err) return callback(err);

        var render = content.toString()
                            .replace("#title#", `<h1>${options.title}</h1>`)
                            .replace("#content#", `<h2>${options.content}</h2>`);

        return callback(null, render);
    });
});

app.set("view engine", "mytemp");
app.set("views", "./views");

app.use('/myroute', routes);

app.listen(3002, 'localhost', 1, () => {
    console.log("Express app listend on 3002");
});