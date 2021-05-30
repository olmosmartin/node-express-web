const express = require('express')
const router = express.Router()

router.get('/',(req, res)=>{
    res.render('index.ejs', {title: 'Inicio'})
})

router.get('/about',(req, res)=>{
    res.render('about.ejs', {title: 'Acerca de'})
})

router.get('/contacto',(req, res)=>{
    res.render('contacto.ejs', {title: 'Contacto'})
})

module.exports=router