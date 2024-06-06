const express =require('express');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());

app.listen(3002,()=>{
    console.log("server started at port no.3002");
})

app.get('/',(request,response)=>{
   response.send("hii i'm syamsai this is my first back end server");
})

app.post('/api/car',(request,response)=>{
    const {name,brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send("hii car was sucessful updated");
})

const mongoose = require('mongoose');
mongoose.connect('mongodb//localhost:27017/Database',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log("Connection sucessfully")})
.catch(()=>{
    console.log("Received an error");
})