import express from 'express'
const app = express()

const port: number = Number(process.env.PORT) || 8080

app.listen(port, ():void=>{
    console.log(`Server is running on port ${port}`)
})