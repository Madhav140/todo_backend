
const express = require('express')

const itemsController = require('../Controller/itemsController')



const router = express.Router()


router.post('/add',itemsController.addItems)

router.get('/getItem',itemsController.getallItems)








module.exports = router