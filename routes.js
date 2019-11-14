var express = require('express');
var routes = express.Router();

routes.get('/', (request, response) => {
    var html = `<div>
        <h3>Home Page Content</h3>
        </div>`;
    response.send(html);
});

routes.get("/user/:id([0-9]{5})", (request, response, next) => {
    response.send("User Page. User Id: " + request.params.id);
});

routes.get("/products/:productname/:id", (request, response) => {
    response.send("Products Page. Product name: " + request.params.productname + " Product Id: " + request.params.id);
});

routes.get('/mytemplate', (request, response) => {
    response.render('first_view_template', {title: "myTemplate", content: "myTemplate Content...."});
})

routes.get('*', (request, response) => {
    response.send("Sorry no routes available.");
});

module.exports = routes;