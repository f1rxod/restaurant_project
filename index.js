const express = require('express')
const bp = require('body-parser')
const ejs = require('ejs')

const app = express()
app.use(bp.urlencoded({extended:true}))
app.use(express.static('public'))
app.set('view engine', "ejs")

app.listen(3000, function(){
    console.log('On it...')
})
app.get('/', function(req, res){
    res.render('index')
})
app.post('/full-menu', function(req,res){
    res.render('menu')
})
app.get('/full-menu', function(req,res){
    res.redirect('/full-menu')
})