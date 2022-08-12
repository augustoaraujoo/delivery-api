import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
    sub:string;
}
export async function ensureAuthenticateClient(request: Request, response: Response, nextFunction: NextFunction) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: "Token missing" });
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub } = verify(token, `${process.env.JWT_KEY}`) as IPayload;
        
        // cliente atual autenticado
        request.id_client = sub;

        return nextFunction();
    } catch (error) {
        return response.status(401).json({ error: "Token invalid" });
    }
}