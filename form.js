const express=require('express');
const app=express();
const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/forms')
.then(()=>{
    console.log("mongodb connected");
    
})
.catch(()=>{
    console.log("reeor");
    
})
const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
});
const user=mongoose.model('form',userSchema);
app.get('/',(req,res)=>{
    res.send("its been connected");
    console.log("sent on server side");
});
app.get('/form',(req,res)=>{
    res.send(`
        <form action ="/form" method="post">
        <h1>REGISTRATION FORM</h1>
        <input type="text"placeholder="Name">
        <input type="password"placeholder="Password">
        <input type="submit">
        <input type="reset">
        </form>`)
})
app.post('/form',async(req,res)=>{
    const {username}=req.body;
    const {password}=req.body;
    try{
        const user=await user.create({username},{password});
       res.send(user);
}
catch(error){
    console.log("login error");
}
})

app.listen(4000,()=>{
    console.log("The server has been connected in the port number");
});