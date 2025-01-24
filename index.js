const express =require('express')

const app=express()


app.get("/",(req,res)=>{
    res.json("the server is running..")
})




app.listen(3001,()=>{
    console.log('server is running on port 3000')
})