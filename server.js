const express = require('express')
const app = express()
const morgan = require('morgan')
const dotenv = require('dotenv').config()
const cors = require('cors')
const mongoose = require('mongoose')
const methodOverride = require('method-override')
const PORT = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())
app.use(morgan("dev"))
app.use(express.json())

mongoose.connect(DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
mongoose.set("strictQuery", false)

// Connection Events
mongoose.connection
  .on("open", () => console.log("You are connected to mongoose"))
  .on("close", () => console.log("You are disconnected from mongoose"))
  .on("error", (error) => console.log(error));

const SongSchema = new mongoose.Schema({
    username: String,
    title: String,
    artist: String
})

const Songs = mongoose.model("Songs", SongSchema)

// Landing Route

app.get("/", (req, res) => {
    res.send("Hello World")
})


// Index Route

app.get("/songs", async (req, res) => {
try{
    res.json( await Songs.findOne({}))
}
catch(error){
    res.status(400).json(error)
}
})


// Create Route
app.post("/songs", async (req, res) => {
    try{
        res.json(await Songs.create(req.body))
    }
    catch(error){
        res.status(400).json(error)
    }
    })


// Update Route
app.put("/songs/:id", async (req, res) => {
    try{
        res.json( await Songs.findByIdAndUpdate(req.params.id, req.body, {new: true}))
    }
    catch(error){
        res.status(400).json(error)
    }
    })

// Delete Route
app.delete("/songs/:id", async (req, res) => {
    try{
        res.json( await Songs.findByIdAndDelete(req.params.id))
    }
    catch(error){
        res.status(400).json(error)
    }
    })


// Show Route
app.get("/songs/:id", async (req, res) => {
    try{
        res.json( await Songs.findById(req.params.id))
    }
    catch(error){
        res.status(400).json(error)
    }
    })



// App listener

app.listen(PORT, () => {
    console.log(`Hey there, Delilah, what's it like in Port ${PORT}?`)
})