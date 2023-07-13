import express from 'express'
import {Server} from 'http'
import next from 'next'
import path from 'path'

let app = express()
let server= Server(app)
let dev = process.env.NODE_ENV!=='production'
let nextApp=next({dev})
let handle=nextApp.getRequestHandler()
let port=process.env.PORT | 3001


nextApp.prepare().then(()=>{

    app.use(express.json())
    app.use(express.static('src'))

    app.all('*',(req,res)=>handle(req,res))

    server.listen(port,()=>{
        console.log(`next server is running on PORT ${port}`)
    })
})