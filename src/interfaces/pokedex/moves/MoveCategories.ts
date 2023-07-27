import { Description } from '../utility/CommonModels';
import { Move } from './Moves';

export interface MoveCategory {
  id: number;
  name: string;
  moves: Move[];
  descriptions: Description[];
}
