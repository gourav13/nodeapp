const express =require('express')
const app =express()

app.get('/',(req,res)=>{
    res.send('hello welcome hey')
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);
