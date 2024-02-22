const express = require ("express")
const app = express ();

app.use(express.static(__dirname + "/"));

app.get("/",(req,res) => {
res.json({result :"OK",massage:"Hello world"})

})

app.listen(5000, () => {
    console.log("server is runnings")
})