let express = require('express');
let app = express();
let port = process.env.port || 3000;

app.use(express.static(__dirname + '/'));

app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/addTwoNumbers',(req,res)=>{
    
    let statusCode = 200;
    let sucessMesssage = 'IT IS SUCCESSFUL';
    let x1 = req.query.x1; 
    let x2 = req.query.x2; 
    let result = parseInt(x1) + parseInt(x2); 

    res.json({
        message:sucessMesssage, 
        code: statusCode, 
        data: result
    });
});

app.listen(port, () => {
    console.log(" SERVER HAS STARTED and APP is listening to http://localhost:"+port);
});