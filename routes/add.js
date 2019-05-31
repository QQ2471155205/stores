const express = require('express');
const path = require('path');
const formidable = require('formidable');
const product=require("../models/product");
const login=require('../middlewares/login');
const router = express.Router();

router.get("/", login,function (req, res) {
    res.render("add");
})


router.post('/', function (req, res) {
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function (err, fields, files) {
        if (err) throw err;
        var obj = {
            ...fields,
            pic: "/" + path.basename(files.pic.path)
        }
        var productIstance=new product(obj);
        productIstance.save();
       
        res.redirect('/add/list');
    })
})

router.get('/list', function (req, res) {
    var arr=[];
    product.find({},function(err,results){
        if(err) throw err;
        res.render('list', {arr:results})
    })
})

router.get('/list/queryp', function (req, res) {
   var arr=[];
   console.log(req.query.title);
    product.find({"title":new RegExp( req.query.title)},function(err,result){
        if(err) throw err;
        console.log(result);
        res.render('list', {arr:result})
        
    })
})


module.exports = router;