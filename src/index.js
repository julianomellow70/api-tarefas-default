const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const YAML = require ('yamljs')
const swaggerUI = require('swagger-ui-express')
const bodyParser = require('body-parser')
const cors = require ('cors')

//Habilitando o CORS
app.use(cors())
//Transformando o corpo da requisição em JSON
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//logs
app.use(morgan('combined'))

//DOCUMENTAÇÃO DA API
const swaggerDocument = YAML.load('./docs/swagger.yml')
app.use('/api/v1/docs',swaggerUI.serve,swaggerUI.setup(swaggerDocument))

//Rotas
const tarefaRoute = require('./routes/tarefaRoute')
app.use('/api/v1/tarefas',tarefaRoute)

const apiRoute = require('./routes/apiRoute')
app.use('/api/v1',apiRoute)

//EROOOOOOOOO

//PORTA DA APLICAÇÃO
const port = process.env.PORT

app.listen(port,()=>{
  console.log(`Servidor rodando na porta ${port}`)
})
