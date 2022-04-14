const express = require('express')
const app = express()
const port = 4444
const path = require('path')
const appDir = path.resolve('./') + '/index.html';



app.use('/dist', express.static('dist'));


app.get('/', (req, res) => {
    res.sendFile(appDir);
 
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})