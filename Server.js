const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const dbconnection = require('./Config/db')
const cors = require('cors')
const router  = require('./Routes/Routes')



const app = express()
app.use(express.json())
app.use(cors());

require('dotenv').config()

dbconnection()

app.use('/api/v1', router)

const PORT = process.env.PORT || 8080


app.listen(PORT, () => {
    console.log(`Server is Running at PORT ${PORT}`.bgGreen)
})

