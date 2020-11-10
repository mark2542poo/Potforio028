//const express = require('express');
//const app = express();
 
//app.get('/',(req,res) => {//เเบบใหม่ name => {  }
    //res.send("<h1>My Portfolio</h1>");//res.send ส่งข้อมูลไปหน้าเว็ป
//});

//app.listen(//Port3000 
  //  3000,
    //()=>{
     //   console.log("listening to port 3000");
    //}
//);
const express=  require('express');
const router = express.Router();
const myData = require('../myData');

router.get('/',(req,res) => {
    res,render('index',{myData});
});

router.get('/aboutme',(req,res) => {
    res,render('about',{myData});
});

router.get('/education',(req,res) => {
    res,render('education',{myData});
});

router.get('/workexperience',(req,res) => {
    res,render('workexperience',{myData});
});

router.get('/skill',(req,res) => {
    res,render('skill',{myData});
});

;

module.exports = router;