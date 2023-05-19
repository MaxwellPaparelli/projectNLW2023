import 'dotenv/config'
import cors from '@fastify/cors'
import jwt from '@fastify/jwt'
import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";
import { authRoutes } from './routes/auth';

const app = fastify()
// HTPP Method: GET(listar), POST(criar), PUT(atualizar), 
//PATCH(atualizar algo específico dentro de um recurso), DELETE(deletar)
app.register(cors, {
  origin: true, //todas as urls de front-end que podem acessar o back-end
})
app.register(jwt, {
  secret: 'spacetime'
})
app.register(authRoutes)
app.register(memoriesRoutes)

app.listen({
  port: 3333,
  host: '0.0.0.0'
}).then(() => {
  console.log('🚀 HTTP server running on http://localhost:3333')
})