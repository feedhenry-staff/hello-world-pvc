'use strict'

const express = require('express')
const app = express()

app.get('/', function (req, res) {
    require('fs').readFile('./config/conf.json', (err, data)=>{
      res.status(200).send('Say: ' + JSON.parse(data.toString()).show )
    })
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})
