import { Item } from '../items/Item';
import { Type } from '../pokemon/Types';
import { BerryFirmness } from './BerryFirmness';

export interface Berry {
  id: number;
  name: string;
  growth_time: number;
  max_harvest: number;
  natural_gift_power: number;
  size: number;
  smoothness: number;
  soil_dryness: number;
  firmness: BerryFirmness;
  flavors: BerryFlavorMap[];
  item: Item;
  natural_gift_type: Type;
}

export interface BerryFlavorMap {
  potency: number;
  flavor: void;
}
