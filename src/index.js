import Fastify from 'fastify';
import dotenv from 'dotenv';

dotenv.config();

const app = Fastify()

// TODO @Daniel: Connect to mongodb database here
// use the process.env.MONGODB_URI to connect to the database

app.get('/status', async (request, reply) => {
    return {status: 'ok'}

})

async function startApp() {
    try {
        await app.listen({port: 3000})
        console.log('Server listening at port: 3000')
    } catch (e) {
        console.error(e)
    }
}

startApp()
