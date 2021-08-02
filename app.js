const express = require("express");
const app = express()
const port = 3030
const mainRouter = require("./router/main")

app.use(express.static('public'));

app.use("/", mainRouter)
app.use("/about", mainRouter)


app.listen(port, console.log("server running in http://localhost:" + port));