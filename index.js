/*
---------HOW TO TEST WEBSITE------------
1) run 'npm run dev in terminal'
2) start debugging in IDE or
open chrome and go to localhost:8080
---------HOW TO STOP TESTING SERVER-------
1) in  terminal type control c
2) type Y and press enter
*/
//index.js handles set up of the site and adding node.js modules
//add the node.js modules to the site
const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
//set handlebars as view engine
app.engine('handlebars', handlebars(({
    //set main as the header and footer for the site
    defaultLayout: 'main',
    //set view/layouts as our static page files
    layoutsDir: path.join(__dirname, 'views/layouts')
})));
app.set('view engine', 'handlebars');
//set /scripts as our folder for javascript files
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));
//Serves static files (we need it to import a css file)
app.use(express.static('public'));
//create a route for each page, might change to a separate js file later
//app.get is a request for the page ending in "/" or "", 
//res is the response, we use res.render to respond with a static page file
//with variables
app.get('/', (req, res) => {
    res.render('index.handlebars', {
        title: 'Home Page'
    });
});
app.get('/about', (req, res) => {
    res.render('about.handlebars', {
        title: 'About Page'
    });
});

HEAD




app.get('/user/new', (req, res) => {
    res.render('newuser.handlebars', {
        title: 'Create Account'
    })
});
app.get('/question/show/:id', (req, res) => {
    res.render('question.handlebars', {
        title: 'Question',
        question: req.params.id
    });
});
app.get('/question/new', (req, res) => {
    res.render('newquestion.handlebars', {
        title: 'New Question'
    });
});
app.get('/account/sign-in', (req, res) => {
    res.render('signin.handlebars', {
        title: 'Sign In'
    });
});
b007a49361039eabba8a6716bf27274aa91e110e
//set the port to run the website on
const PORT = process.env.PORT || 8080;
//run the website on PORT
app.listen(PORT, () => console.log('server started on port ' + PORT));

/**/