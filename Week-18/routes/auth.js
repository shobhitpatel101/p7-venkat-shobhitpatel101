const express = require('express')
const route = express.Router()
const Users = require('../models/users');
const mongoose = require("mongoose");

const mongodbquery = 'mongodb+srv://shobhitpatel9935:MizSB2LRCjpBxFKJ@cluster1.pzberxs.mongodb.net/wealthDB?retryWrites=true&w=majority'
// const mongodbquery = 'mongodb://localhost:27017'

async function connectToDB(){
    await mongoose.connect(mongodbquery, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(()=>{
            console.log("MongoDB connected!!")
        }).catch((err) => {
            throw err;
        })
}

route.get("/login", async (req, res)=>{
    try{
        await connectToDB();
        const Userdata = new Users({
            userName: req.body.userName,
            password: req.body.password
        })

        await Users.find(Userdata).then((data)=>{
            console.log(data)
            if(data.length != 0){
                res.json({"Status": "OK, Login successful.","request Body" : req.body});  
            }else{
                res.status(200).json({"Status": "User Not registered!", "Error": err })
            }
        }).catch((err)=>{
            res.status(500).json({"Status": "Error", "Error": err })
        })
    } catch(err){
        res.status(500).json({"Status": "Error", "DB Error": err })
        throw err;
    }
})

// Add async/await to use try/catch instead of .then() and .catch()
route.post("/signup", async (req, res) => {
    try {
            await connectToDB();

            const Userdata = new Users({
                userName: req.body.userName,
                password: req.body.password
            });

            await Users.findOne({userName: {$eq: req.body.userName}}).then((data)=>{
                console.log(data)
                if(data == null){
                    Userdata.save();
                    res.json({"Status": "OK, User registered.","request Body" : req.body});  
                }else{
                    res.json({"Status": "User already registered."});
                }
            }).catch((err) => {
                res.status(500).json({"Status": "Error", "Message": err.message})
            })
        } catch (err) {
            console.error(err);
            res.status(500).json({"Status": "Error", "Message": err.message})
        }
});

module.exports = route;