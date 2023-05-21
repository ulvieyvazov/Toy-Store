const express = require("express")
const cors = require('cors')
const bodyParser = require("body-parser")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const DB = process.env.DB_URL
mongoose.connect(DB, { useNewUrlParser: true })



const { Schema } = mongoose

const toySchema = new Schema(
    {
        img: {
            type: String,
            require: true
        },
        name: {
            type: String,
            require: true
        },
        price: {
            type: String,
            require: true
        }
    },
    { timestamps: true }
)

const Toy = mongoose.model("jobs", toySchema)

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get("/toys", async (req, res) => {
    try {
        const getToy = await Toy.find({})
        res.send(getToy)
    }
    catch (err) {
        res.status(500).json({ message: err })
    }
})

app.get("/toys/:id", async(req, res) => {
    try {
        const getToyId = await Toy.findById({})
        res.send(getToyId)
    }
    catch (err) {
        res.status(400).json({ message: err })
    }
})

app.post("/toys", (req, res) => {
    const getBody = req.body
    const postToy = new Toy(getBody)
    postToy.save()
    res.send(postToy)
})

app.delete("/toys/:id", async(req, res) => {
    try{
        const deletBody = req.params.id
        const deletToy = await Toy.findByIdAndDelete(deletBody)
        res.send(deletToy)
    }
    catch(err){
        res.status(400).json({message: err})
    }
})

app.put("/toys/:id", async(req, res)=>{
    try{
        const toysId =  req.params.id
        const updateToys = req.body
        const res = await Toy.findByIdAndUpdate(toysId, updateToys , {new: true})
        res.send(res)
    }
    catch(err){
        res.status(400).json({message: err})
    }
})


const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server ${PORT} portunda qalxdi`);
})