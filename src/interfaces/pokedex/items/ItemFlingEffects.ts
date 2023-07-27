import { Effect } from '../utility/CommonModels';
import { Item } from './Item';

export interface ItemFlingEffect {
  id: number;
  name: string;
  effect_entries: Effect[];
  items: Item[];
}
