import AppError from "@shared/errors/AppError";
import { NextFunction, Request, Response } from "express";
import { Secret, verify } from "jsonwebtoken";

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization

  if (!authHeader) {
    throw new AppError('JWT Token is missing');
  }

  const [, token] = authHeader.split(' ')

  // esse try catch é exceção na aplicação pq o express não consegue tratar cada haja erro
  try {

    const decodedToken = verify(token, process.env.JWT_SECRET as Secret)

    const { sub } = decodedToken as ITokenPayload

    request.user = {
      id: sub
    }

    return next()
  } catch (err) {
    throw new AppError('Invalid JWT token');
  }
}