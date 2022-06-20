const express = require('express')
const app = express()
const port = 4444
const path = require('path')
const appDir = path.resolve('./') + '/public/index.html';



app.use('/', express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(appDir);
 
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})