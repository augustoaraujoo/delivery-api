import express from 'express'
const PORT = process.env.PORT || 6060;

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
<<<<<<< HEAD
    res.send(' World!');
=======
    res.send('https://devcenter.heroku.com/articles/getting-started-with-nodejs');
>>>>>>> 5a2ea4149a03abcd64fadd964ce39e5780220b18
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