var express = require("express")
var app =express()
var port=  process.env.port || 3000;

app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({extends: false}))

const addNumbers (num1, num2) =>
{
    var x1= parseInt(num1)
    var x2= parseInt(num2)
    var result= x1+x2;
    return result;
}

app.get("/addTwoNumbers",(req,res)=>
{
    var x1=req.query.num1;
    var x2=req.query.num2;
    var result= addNumbers(num1 , num2)
    res.json({statusCode:200, data:result, message:'success'})
})
var port=porcess.env.port || 3000;
app.listen(port,()=>
{
    console.log("app listening to http://localhost:"+port)
})