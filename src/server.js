const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')

const app = express()
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/omnistack9', { useNewUrlParser: true, useUnifiedTopology: true})
require('./models/User')

app.use(routes)



app.listen(2222)