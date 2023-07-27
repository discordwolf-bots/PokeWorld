import { Item } from './Item';
import { ItemPocket } from './ItemPockets';

export interface ItemCategory {
  id: number;
  name: string;
  items: Item[];
  pocket: ItemPocket;
}
