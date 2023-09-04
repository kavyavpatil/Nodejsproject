const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const detailsAppnode=require('./appnode/details');
const shopAppnode=require('./appnode/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use('/detailsAppnode' ,detailsAppnode);
app.use('/shopAppnode',shopAppnode);

app.use('/',function(req,res,next){
    res.send('<h3 style="text-align:center">WELCOME TO BOOK SHOPPING</h3>');
    

    

});
app.listen(3000,function(){
    console.log('server is working ');
});
