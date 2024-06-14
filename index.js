const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")

require("dotenv").config({ path: "./.env" })

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/todo", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(400).json({ message: "resource not found" })
})

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message || "something went wrong" })
})
mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("mongo db connected");
    app.listen(process.env.PORT, console.log("server ruinning"))
})