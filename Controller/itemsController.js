const items = require('../Model/todoSchema')

exports.addItems = async(req,res)=>{
  
    const{title,description} = req.body

    try {
        const existingitem = await items.findOne({description})

        if(existingitem){
            res.status(406).json('Item already uploaded')
        }
        else{
            const newItem = new items({
                title,
                description
            })
            await newItem.save()
            res.status(200).json(newItem)
           
        }
        
    } catch (err) {
        res.status(401).json(`Request failed due to ${err}`)
    }
}


exports.getallItems = async(req,res)=>{

    try {
     const item = await items.find()
     res.status(200).json(item)
    } catch (err) {
     res.status(401).json(`Request failed due to ${err}`)
    }
 }
