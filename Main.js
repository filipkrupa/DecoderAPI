 const x=require('./Decoder.js')
 var jsonObject
 const express = require('express')
 const app = express()
 const port = 3000
 
 app.get('/', (req, res) => res.send('Hello, this is your node server!'))
 app.listen(port, () => console.log(`Example app listening on port ${port}!`))

 var bodyParser = require('body-parser');
 app.use(bodyParser.text({type:"*/*"}));

 app.post('/decode', function(req,res){
text = req.body;
var arr = x.CreateArray(text)
var result = x.Decode(null,arr);
var JObject = JSON.stringify(result);
res.end(JObject);

 });