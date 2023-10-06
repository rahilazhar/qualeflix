const mongoose = require('mongoose')


const Categories = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
      

    }, { timestamps: true })

module.exports = mongoose.model('Categories', Categories)