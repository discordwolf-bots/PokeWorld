import { Move } from '../moves/Moves';
import { FlavorText } from '../utility/CommonModels';

export interface SuperContestEffect {
  id: number;
  appeal: number;
  flavor_text_entries: FlavorText[];
  moves: Move[];
}
