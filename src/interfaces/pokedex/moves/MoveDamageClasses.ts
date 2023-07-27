import { Description, Name } from '../utility/CommonModels';
import { Move } from './Moves';

export interface MoveDamageClass {
  id: number;
  name: string;
  descriptions: Description[];
  moves: Move[];
  names: Name[];
}
