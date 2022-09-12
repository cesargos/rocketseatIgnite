import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import { User } from '../entities/User';

interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  list(): Promise<User[] | undefined>;
  findByEmail(email: string): Promise<User | undefined>;
}

export { IUsersRepository };
