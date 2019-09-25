const express =require('express')
const app =express()

app.get('/',(req,res)=>{
    res.send('hello welcome hey')
})


app.listen(2222,()=>{
    console.log("server started")
})