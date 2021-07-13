const express = require('express')
const router = express.Router()
const dogController = require('../controller/dogController')

router.get('/', dogController.dog_create_get)

router.post('/', dogController.dog_create_post)

module.exports = router