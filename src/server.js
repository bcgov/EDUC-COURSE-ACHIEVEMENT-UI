'use strict'

const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('./public/index.html'))
app.listen(port, () => console.log('Running on ${port}'))
