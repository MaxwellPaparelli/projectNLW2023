import fastify from "fastify";
import {PrismaClient} from '@prisma/client'
const app = fastify()
const prisma = new PrismaClient()
// HTPP Method: GET(listar), POST(criar), PUT(atualizar), 
//PATCH(atualizar algo específico dentro de um recurso), DELETE(deletar)

app.get('/users', async () => {
  const users = await prisma.user.findMany()
  return users
})

app.listen({
  port: 3333,
}).then(() => {
  console.log('🚀 HTTP server running on https://localhost:3333')
})