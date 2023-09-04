const path=require('path');
const express=require('express');
const router=express.Router();
router.get('/pro',function(req,res,next){
    res.sendFile(path.join(__dirname,'..','html','firstpage.html'));

});
router.post('/pro',function(req,res,next){
    console.log(req.body);
    res.redirect('/');


});
module.exports=router;