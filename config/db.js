import mongoose from "mongoose";

 const connectDB = async ()=>{
  try { 
     await mongoose.connect(process.env.MONGO_URI);
     console.log("DB Connected Successfully..!");
    
  } catch (error) {
     console.log("Error in DB : ",error);
  }

 }
 export default  connectDB;