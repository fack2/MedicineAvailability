const path = require("path")
const express = require("express")
const app = express()
const router = require("./router")

app.use(express.static(path.join(__dirname, "..", "client", "build")))

app.use(express.json())
app.use(express.urlencoded())
app.use(router)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"))
})

module.exports = app
