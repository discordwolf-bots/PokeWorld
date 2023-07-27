import { Description, Name } from '../utility/CommonModels';
import { Move } from './Moves';

export interface MoveTarget {
  id: number;
  name: string;
  descriptions: Description[];
  moves: Move[];
  names: Name[];
}
