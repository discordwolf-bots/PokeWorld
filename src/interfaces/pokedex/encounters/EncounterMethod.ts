import { Name } from '../utility/CommonModels';

export interface EncounterMethod {
  id: number;
  name: string;
  order: number;
  names: Name[];
}
