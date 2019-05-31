const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const product = require('../models/product');
const login=require('../middlewares/login')

router.get('/delete/:id', login,function (req, res) {
    product.findByIdAndRemove(req.params.id, function (err) {
        if (err) throw err;
        console.log("数据库删除成功");
        //删除相应的图片 
        fs.unlink(path.join(__dirname, "../", 'uploads', req.query.img), function (err) {
            if (err) throw err;
            console.log("图片删除成功");
        });
        res.redirect("/add/list");
    })
})
router.get('/update/:id', login,function (req, res) {
    product.findById(req.params.id, function (err, result) {
        if (err) throw err;
        res.render("update", {
            data: result
        })
    })
})

router.post('/update/:id', function (req, res) {
   
    const form = new formidable.IncomingForm();
    form.keepExtensions = true;
    form.uploadDir = path.join(__dirname, "../", "uploads");
    form.parse(req, function (err, fields, files) {
        if (err) throw err;
        
        var obj = {
            ...fields,
            updateAt: new Date() 
        }
       
        if (files.pic.name) { 
            obj.pic = "/" + path.basename(files.pic.path);
        } else { 

        }
        product.findByIdAndUpdate(req.params.id,obj,function(err){
            if(err) throw err;
            console.log("更新成功");
            
            res.redirect('/add/list');
        })
    })
})


module.exports = router;