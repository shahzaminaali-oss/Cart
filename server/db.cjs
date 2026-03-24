const mongoose=require('mongoose')

const connectDb = async() =>{
    try{
        const con=mongoose.connect(process.env.MONGO_URI)
        console.log('mongo connected')
    }
    catch(err)
    {
        console.log('Not connected', err.message)
        process.exit(1)
    }
}

module.exports=connectDb