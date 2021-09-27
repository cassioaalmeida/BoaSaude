const express = require('express')
const app = express()
const routes = require('./routes/routes')

app.use(express.json());
    
app.use('/api', routes) 

app.listen(3000)
