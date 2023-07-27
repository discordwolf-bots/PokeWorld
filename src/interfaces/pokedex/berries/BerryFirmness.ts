import { Name } from '../utility/CommonModels';
import { Berry } from './Berries';

export interface BerryFirmness {
  id: number;
  name: string;
  berries: Berry[];
  names: Name[];
}
