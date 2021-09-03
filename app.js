const experss = require("express")

const app = experss()

app.get("/", ( req, res ) => {
res.send("hello world!")
})

app.listen(3000)