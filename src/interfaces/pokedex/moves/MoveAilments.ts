import { Name } from '../utility/CommonModels';
import { Move } from './Moves';

export interface MoveAilment {
  id: number;
  name: string;
  moves: Move[];
  names: Name[];
}
