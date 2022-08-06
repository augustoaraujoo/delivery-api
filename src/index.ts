import express from 'express'
const PORT = process.env.PORT || 6060;
import { Prisma, PrismaClient } from '@prisma/client'
const app = express();
app.use(express.json());
const prisma = new PrismaClient();



app.get('/', async(req, res) => {
    const RESULT = await prisma.deliveryman.findMany();
    res.json(RESULT);
})
app.post('/delivery', async(req, res) => {
    const { username, password } = req.body;
    const createDelivery = await prisma.deliveryman.create({
        data: {
            username,
            password
        }
    });
    res.json(createDelivery);
})
app.listen(PORT, () => {
    console.log(`

    #Projeto base https://github.com/augustoaraujoo/delivery-api

    [npm init -y]
    [git init]
    [Procfile]
    
    *PRISMA*
    [url      = env("DATABASE_URL")
    shadowDatabaseUrl = env("SHADOW_DATABASE_URL")]
    * /PRISMA*

    yarn add dotenv
    tsconfig.json é padrão no prisma.io


    set DATABASE_URL=postgres://postgres:postgres@localhost:5432/postgres

    set shadowDatabaseUrl=postgres://postgres:postgres@localhost:5432/postgres_shadow



    [create heroku] = cli
    [create db]
    se der pau no git ![remote rejected] master->master
        n sei como mas deu certo a build, 
        só remover o yarn-error.log
        yarn.lock 
    ${PORT}`);
})