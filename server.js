import express from "express"
import configureMiddleware from "./configureMiddleware.js"

const PORT = process.env.PORT
const app = express()

configureMiddleware(app)

app.get("/", (req, res) => {
    res.render("home")
})

app.get("/play", (req, res) => {
    res.render("play")
})

app.get("/flags", (req, res) => {
    res.render("flags")
})

app.get("/home", (req, res) => {
    res.render("home")
})

app.get("/quellen", (req, res) => {
    res.render("quellen")
})

// Start the server on the port specified in .env!
app.listen(PORT, () => console.log(`Server listening on: http://localhost:${PORT}`))
