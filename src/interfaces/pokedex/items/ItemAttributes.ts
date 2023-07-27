import { Description } from '../utility/CommonModels';
import { Item } from './Item';

export interface ItemAttribute {
  id: number;
  name: string;
  items: Item[];
  description: Description[];
}
