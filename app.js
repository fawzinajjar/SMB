const config = require("./config.json")
const experss = require("express")
const app = experss()
// Routes 
const signin = require("./api/signin")
const signup = require("./api/signup")
// Server 
app.listen(3000,() => console.log(`>> Server started on port : ${config.PORT}`))
// Tests
app.get("/", ( req, res ) => {
res.send("hello world!")
})
// MiddleWare
app.use("/signin", signin)
app.use("/signup", signup)