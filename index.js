const express = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config();

const app = express();
app.use(express.json());


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("Successfully mongoDB connected")
}).catch((error)=>{
    console.log("Unable to connect to MongoDB ")
});

const PORT = process.env.PORT || 4000;


app.listen(PORT, ()=>{
    console.log(`SErver listening on port ${PORT}`)
})