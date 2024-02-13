
require('dotenv').config()


const express = require('express')


const cors = require('cors')

const router  = require('./Router/router')

require('./DB/connection')

const todoServer = express()

todoServer.use(cors())

todoServer.use(express.json())

todoServer.use(router)





const PORT = 4000 || process.env

//8.to run server
todoServer.listen(PORT,()=>{
    console.log(`Server Running Successfully at port number ${PORT}`);
})

todoServer.get('/',(req,res)=>{
    res.send(`<h1 style="color:red">to do server running successfuly</h1>`)
})
