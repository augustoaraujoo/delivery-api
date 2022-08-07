import { app } from './app';
const PORT = process.env.PORT || 6060;

<<<<<<< HEAD:src/index.ts
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send(' World!');
})
=======
>>>>>>> 71cd29ba6fb2813ac88d966107a537d51da0fab1:src/shared/infra/http/index.ts
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