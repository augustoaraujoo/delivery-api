import { app } from './app';
const PORT = process.env.PORT || 6060;

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

    [create heroku] = cli
    [create db]
    se der pau no git ![remote rejected] master->master
        n sei como mas deu certo a build, 
        só remover o yarn-error.log
        yarn.lock 
    ${PORT}`);
})