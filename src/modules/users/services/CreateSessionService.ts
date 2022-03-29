import { sign, Secret } from 'jsonwebtoken'
import {compare} from 'bcryptjs'
import AppError from '@shared/errors/AppError';
import UsersRepository from '../repositories/UsersRepository';
import { ICreateSession, ICreateSessionResponse } from '../models/ICreateSession';

class CreateSessionsService {
  public async execute({ email, password }: ICreateSession): Promise<ICreateSessionResponse> {
    const usersRepository = new UsersRepository()
    
    const user = await usersRepository.findByEmailForSession(email)

    if (!user) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const passwordConfirmed = await compare(password, user.password)

    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination', 401);
    }

    const token = sign({}, process.env.JWT_SECRET as Secret, {
      subject: user.id,
      expiresIn: '30d'
    })

    return {
      user,
      token
    }
  }
}

export default CreateSessionsService