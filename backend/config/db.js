import mongoose from 'mongoose';


const connectDB= async()=>{
    try{
        const mongoUrl = process.env.MONGO_URL || 'mongodb+srv://arshadyako:aventador@cluster0.um108yd.mongodb.net/';

        const conn= await mongoose.connect(mongoUrl)
        console.log(`connected to database ${conn.connection.host}`)
    }catch(error){
        console.log(error.message);
        process.exit()
    }
}

export default connectDB