const express=require('express');
const app=express();
app.use('/',(req,res,next)){
    res.send()
}
app.get('/',(req,res)=>{
    res.send("it is submitted");
})
app.post('/form',(req,res)=>{
res.send("hi this is post request from server side");
})
app.listen(2000,()=>{
    console.log("server is connected");
})