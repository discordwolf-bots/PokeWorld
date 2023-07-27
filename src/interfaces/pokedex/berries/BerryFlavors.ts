import { ContestType } from '../contests/ContestTypes';
import { Name } from '../utility/CommonModels';
import { Berry } from './Berries';

export interface BerryFlavor {
  id: number;
  name: string;
  berries: FlavorBerryMap[];
  contest_type: ContestType;
  names: Name[];
}

export interface FlavorBerryMap {
  potency: number;
  berry: Berry;
}
