import { Name } from '../utility/CommonModels';
import { ItemCategory } from './ItemCategories';

export interface ItemPocket {
  id: number;
  name: string;
  categories: ItemCategory[];
  names: Name[];
}
