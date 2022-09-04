import { v4 as uuidV4 } from 'uuid';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}
class Category {
  id: string;
  name: string;
  description: string;
  created_at: Date;

  constructor({ name, description }: ICreateCategoryDTO) {
    this.id = uuidV4();
    this.created_at = new Date();
    this.name = name;
    this.description = description;
  }
}

export { Category };
