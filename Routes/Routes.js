const express = require('express')
const {Categories , Allcategories } = require('../Controllers/Categories')


const router = express.Router()


router.post('/categories' , Categories)
router.get('/categoriesget' , Allcategories )





module.exports = router