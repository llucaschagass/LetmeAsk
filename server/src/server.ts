import { fastify } from 'fastify'
import { serializerCompiler, validatorCompiler, type ZodTypeProvider, } from 'fastify-type-provider-zod'
import { fastifyCors} from '@fastify/cors'

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: 'http://localhost:3000',
})

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.listen({ port: process.env.PORT ? Number(process.env.PORT) :  3333 }).then(() => {
  console.log(`server running on port ${process.env.PORT}`)
})

