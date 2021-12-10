const express = require('express')

const ProjectRouter = require('./project/router')
//const ResourceRouter = require('./resource/router')
//const TaskRouter = require('./task/router')


const server = express()

server.use(express.json())
server.use('/project/router', ProjectRouter)
//server.use('/resource/router', ResourceRouter)
//server.use('/task/router', TaskRouter)
module.exports = server;