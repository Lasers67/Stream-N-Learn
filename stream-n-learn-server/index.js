const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

app.get('/api/getCourseList', (req,res) => {
    var list = ["music", "programing", "dance"];
    res.json(list);
    console.log('Sent list of items');
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))