const mongoose = require('mongoose')


const todoSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

const items = mongoose.model("items",todoSchema)


module.exports = items