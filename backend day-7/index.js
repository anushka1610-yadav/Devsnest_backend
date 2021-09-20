const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    // res.sendStatus(201);
    // res.json();
    res.status(200).send("Helloo");
});

app.get('/product',(req,res)=>{
    req.query = {
        limit : 50,
        q : "something"
    }
    res.send(req.query.q);

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
app.listen(3000);