import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
    path:"../.env"
})

const databaseConnection = () => {
    mongoose.connect('mongodb+srv://abhijeetmahto17:netflix@cluster0.03liere.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("mongodb connected successfully");
    }).catch((error)=>{
        console.log(error);
    })
};
export default databaseConnection;