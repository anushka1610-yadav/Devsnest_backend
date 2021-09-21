const express = require('express');
const app = express();
const bodyParser = require('body_parser');
// app.get('/',(req,res,next)=>{
//     console.log("in first");
//     next();
// }, (req,res)=>{
//     res.Status(200);
//     res.json(req.query);
// });

// app.get('/',(req,res,next)=>{
//     console.log("in first",req.query);
//     if(req.query.admin == 'true'){
//         next();
//     }
//     else{
//         res.status(400).send("should be admin");
//     }
// }, (req,res)=>{
//     res.Status(200);
//     res.json(req.query);
// });

const checkAdmin = (req,res,next)=>{
    console.log("in first",req.query);
    if(req.query.auth == 'anu'){
        next();
    }
    else{
        res.status(401).send("should be admin");
    }
};

// app.use(bodyParser).urlencoded({extended: true});
// app.use(bodyParser.json());

const sendRes = (req,res)=>{
    res.Status(200);
    res.json(req.query);
};  

app.get('/', sendRes);

app.post('/',(req,res)=>{
    console.log('req.body->', req,body);
    res.json({text: req.body});

});

app.get('/ab?cd',(req,res)=>{
    res.send('abcd');
});

app.get('/ab+cd',(req,res)=>{
    res.send('abcd');
});

app.get('/ab*cd',(req,res)=>{
    res.send('abcd');
});

app.get('/ab(cd)?e',(req,res)=>{
    res.send('abcd');
});

app.get(/.*fly$/,(req,res)=>{
    res.send('abcd');
});

app.get('/user/:userId/books/:bookId',(req,res)=>{
    console.log(req.query);
    res.send(req.params);
});

// const slash = (req,res)=>{
//     res.send("helloooo");
// }

// app.get('/',slash);
// app.post('/',slash);
// app.put('/',slash);
// app.delete('/',slash);
app.listen(5000);