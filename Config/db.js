const mongoose  = require('mongoose')


const dbconnection = async()=>{
    try {

        const connectionstring = process.env.Mongoose_URL

       await  mongoose.connect(connectionstring)
        console.log('Database is Conneced'.bgBlue)
        
    } catch (error) {
        console.log(`Error is Database Connection ${error}`.bgRed)
    }
}

module.exports = dbconnection