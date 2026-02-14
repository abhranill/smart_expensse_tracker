import express from "express"
import mongoose from "mongoose"
import 'dotenv/config'

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running 🔥");
});

const port = process.env.PORT
const connectDB = async() => {
    try{
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connect to db successfully");
    }catch(error){
        console.error("Error connectiong to MONGO DB ",error);
        process.exit(1);
    }
};

connectDB().then(()=>{
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)})
})
