import { v4 as uuidV4 } from 'uuid';

import { ICreateSpecificationDTO } from '../repositories/ISpecificationsRepository';

class Specification {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description }: ICreateSpecificationDTO) {
    this.id = uuidV4();
    this.created_at = new Date();
    this.name = name;
    this.description = description;
  }
}

export { Specification };
