import cors from '@fastify/cors'
import fastify from "fastify";
import { memoriesRoutes } from "./routes/memories";

const app = fastify()
// HTPP Method: GET(listar), POST(criar), PUT(atualizar), 
//PATCH(atualizar algo específico dentro de um recurso), DELETE(deletar)
app.register(cors, {
  origin: true, //todas as urls de front-end que podem acessar o back-end
})
app.register(memoriesRoutes)

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀 HTTP server running on https://localhost:3333')
})