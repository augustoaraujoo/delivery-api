import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
interface IPayload {
    sub: string;
}
export async function ensureAuthenticateDeliveryman(request: Request, response: Response, nextFunction: NextFunction) {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        return response.status(401).json({ error: "Token missing" });
    }

    const [, token] = authHeader.split(" ");
    try {
        const { sub } = verify(token, `${process.env.JWT_KEY_DELIVERYMAN}`) as IPayload;

        // cliente atual autenticado
        request.id_deliveryman = sub;

        return nextFunction();
    } catch (error) {
        return response.status(401).json({ error: "Token invalid" });
    }
}