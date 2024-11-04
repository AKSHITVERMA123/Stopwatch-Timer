const express= require("express");
const mongoose= require("mongoose");
// const sql= require("sql");
const cors = require('cors');
const { default: axios } = require("axios");
const app= express();
const User= {
    username : "",
    Email : "",
    password : "",
    ConfirmPassword : ""
}
app.use(cors());
app.set('view engine', 'index');
app.set('views', 'src/views');
// require("dotenv").config();
const PORT = 4040 || 5000;
const MONGODB_URI="mongodb://localhost:27017/bookstoredb";
mongoose.connect(MONGODB_URI)
.then(() => console.log("MongoDB is Connected"))
.catch((err) => console.error("Error ! MongoDB not Connected Try again !") && console.log(err))

axios.get("http://localhost:4040/UserRegistration",(req,res) => {
    console.log(JSON.stringify(User));
}).then(() => {
    console.log("User Registered Successfully");
})

app.get('/UserRegistration', (req,res) => {
        res.render(User);
        });

// app.get("/users", (request,response) =>  {
//     response.send("userAll");
// });

// mongoose
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})  