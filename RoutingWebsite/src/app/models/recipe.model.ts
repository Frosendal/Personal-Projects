import { Item } from './item.model';

export interface Recipe {
  items: Item[];
  modelId: number;
  name: string;
  introduction: string;
  method: string;
}
