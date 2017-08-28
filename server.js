// BOILERPLATE FOR PAUL HUMPHREY EXPRESS server.js FILES

// steps to setup this server:
// 1. create "root" folder for the entire project...
// 2. create server.js file in root of directory...  i.e. the "entry point" for the server
// 3. create "public" folder to contain the website files... i.e. what the client has access to
  // 3a. create html, css, js, images folders inside public to hold those files...
// 4. git init...  create repository (creates .git folder)
// 5. create .gitignore file  (ignore node_modules & .DS_Store, whatever else desired...)
// 6. npm init... create node project (answer prompts as needed to create package.json file)
  // 6a. npm install express
  // 6b. npm install body-parser
  // 6c. npm install request
  // 6d. npm install multer
// 7. start nodemon to run server...  listening on port defined at bottom of server.js file (e.g. 8080)

// we need these in the npm_modules foler
var express = require('express')
var bodyParser = require('body-parser')
var request = require('request')
var fs = require('fs')
var multer = require('multer')

// start the express server app
var app = express()

// if you want to use the ISP's port or port 8000, use this code and then put PORT in the listen argument
// const PORT = process.env.PORT || 8000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middleware static file server from public folder
app.use(express.static('./public'))

// home page
app.get('/', function(req,res){
  res.sendFile('./html/index.html', {root: './public'})
})

// 1st location
<<<<<<< HEAD
app.get('/penitente-canyon', function(req,res){
  res.sendFile('./html/location-1.html', {root: './public'})
=======
app.get('/Penitente-Canyon', function(req,res){
  res.sendFile('./location-1.html', {root: './public'})
>>>>>>> 3b94a54e3bd0348aa51255fb9a8d12f733e7d698
})

// 2nd location
app.get('/pagosa-springs', function(req,res){
  // instead of just string text, we can use sendFile to serve an .html file (for example)
  // needs path to file, and the root folder that path is relative to
  res.sendFile('./html/location-2.html', {root: './public'})
})

// 3rd location
app.get('/durango', function(req,res){
  // instead of just string text, we can use sendFile to serve an .html file (for example)
  // needs path to file, and the root folder that path is relative to
  res.sendFile('./html/location-3.html', {root: './public'})
})

// 4th location
app.get('/canyon-of-the-ancients', function(req,res){
  // instead of just string text, we can use sendFile to serve an .html file (for example)
  // needs path to file, and the root folder that path is relative to
  res.sendFile('./html/location-4.html', {root: './public'})
})

// 5th location
app.get('/hovenweep', function(req,res){
  // instead of just string text, we can use sendFile to serve an .html file (for example)
  // needs path to file, and the root folder that path is relative to
  res.sendFile('./html/location-5.html', {root: './public'})
})

// Cargo Validator get...
app.get('/cargo-validator', function(req,res){
  // instead of just string text, we can use sendFile to serve an .html file (for example)
  // needs path to file, and the root folder that path is relative to
  res.sendFile('./html/cargo-validator.html', {root: './public'})
})

// Cargo Validator post...
app.post('/validate-cargo', function(req,res,next){
    console.log('lets validate the cargo data')
    console.log(req.body)
    if (req.body.cost <= 0 && req.body.weight <= 0) {
        res.send({message: 'Cargo is Not Valid.'})
    }
    else if (req.body.cost > 200 || req.body.weight > 200) {
        res.send({message: 'Cargo is Not Valid.'})
    }
    else if (req.body.cost > 0 && req.body.cost <= 200 && req.body.weight > 0 && req.body.weight <= 200) {
        res.send({message: 'Cargo is Valid!'})
    }
})

// 404 page
app.get('/404', function(req,res){
  res.sendFile('./html/404.html', {root: './public'})
})

// 404 error handling middleware
app.use(function(req, res, next){
  res.status(404)
  res.redirect('/404')
})

// listen on which port?
app.listen(8080)
