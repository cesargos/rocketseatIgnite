import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

@injectable()
class ListUsersUseCase {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUsersRepository // ele vai buscar no containers essa interface
  ) {}
  async execute(): Promise<User[] | undefined> {
    const users = await this.userRepository.list();
    return users;
  }
}
export { ListUsersUseCase };
