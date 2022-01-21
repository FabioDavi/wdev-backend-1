const express = require('express')
const app = express()

require('dotenv').config()

const port = process.env.PORT || '3080'
//fazer esse https://github.com/woliveiras/curriculo-expresso
/*
If I’m hiring a Fullstack Nodejs developer I’m looking for the following:

Experience with Express concepts (routes, how the server works, req/res, locals…)
Experience with one of the common ORMs (Sequelize, Sails…)
MVC for the web (how models, views, controllers are fairly standardized for Nodejs apps)
Experience with a templating language (Mustache, Handlebars, EJS…)
Modern JavaScript language features (promises + async/await, ES6 & 7 syntax…)
Experience with a front end framework (React, Angular, Backbone…)
Modern CSS 3.0 & HTML
Some Database experience (MySQL, Mongo, Postgres…)
For Senior Developers

Performance considerations (parallelization with async, minimizing HTTP requests, minimizing DOM interaction, building CSS / JS front end files)
Very detailed syntax knowledge (senior developers memorize syntax because they’ve coded in it everyday for years, junior developers might 
    still need the docs)
Security Knowledge (CSRF, SQL Injection prevention, JS injection prevention…)
Server setup & administration (E.g. ins and outs of AWS, DNS setup, DB setup, Docker, etc.)
When I say “Experience” that means work, freelance, or personal projects. Developers have to change languages all the time as their 
career progresses, so it doesn’t make sense to always expect someone has coded Nodejs in their current organization, but 
you shouldn’t be applying to a Nodejs position if you haven’t at least built a side project in Node and have gone through the 
experience of hello world to basic reading from a database to a simple asynchronous-on-the-backend, single-page-on the-front-end app.

*/
app.set('view engine', 'ejs');
app.set('views', './src/exemplos/views');

// index page
app.get('/', function(req, res) {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('pages/index', {
        mascots: mascots,
        tagline: tagline
    });
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(port,() => {
    console.log(`Servidor rodando na porta ${port}`);
});