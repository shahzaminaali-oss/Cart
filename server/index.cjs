const express=require('express')
const cors=require('cors')
require('dotenv').config()
const path = require("path");
const PORT=process.env.PORT || 5000

const app=express()

app.use(express.json())
app.use(cors())
app.use("/upload", express.static(path.join(__dirname, "upload")));



const connect=require('./db.cjs')
connect()

const route=require('./routes/catroute.cjs')
app.use('/',route)

const orderRoute=require('./routes/orderroute.cjs')
app.use('/api',orderRoute)

app.listen(PORT, ()=>{
 console.log(`server running on port http://localhost:${PORT}`)
})