const path=require('path');
const express=require('express');
const router=express.Router();

const app=express();
router.use('/finile',function(req,res,next){
    res.sendFile(path.join(__dirname,'..','html','secondpage.html'));

});

module.exports=router;