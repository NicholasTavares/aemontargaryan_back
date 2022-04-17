import AppError from '@shared/errors/AppError';
import { getCustomRepository } from 'typeorm';
import { ICreateUser } from '../models/ICreateUser';
import { IUser } from '../models/IUser';
import { hash } from 'bcryptjs';
import UsersRepository from '../repositories/UsersRepository';

class CreateUserService {
  public async execute({ name, email, password }: ICreateUser): Promise<IUser> {
    const usersRepository = getCustomRepository(UsersRepository);
    
    const emailExists = await usersRepository.findByEmail({
      email
    });

    if (emailExists) {
      throw new AppError('Email address already used');
    }

    const hashedPassword = await hash(password, 8)

    const user = await usersRepository.create({
      name,
      email,
      password: hashedPassword
    })

    await usersRepository.save(user)

    return user
  }
}

export default CreateUserService