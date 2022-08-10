require('dotenv').config();
import express, { NextFunction, Request, Response } from 'express'
// import swaggerUI from 'swagger-ui-express'
// import swaggerFile from '../../../swagger.json';
// app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerFile));
// erro ao rodar na produção swagger
import 'express-async-errors';
import { routes } from './routes';

const app = express();
app.use(express.json());
app.use(routes)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return res.status(400).json({
            message: err.message
        })
    }
    return res.status(500).json({
        status: 'error',
        message: 'Internal server error'
    })

})
export { app };