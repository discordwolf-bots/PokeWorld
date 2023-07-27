import { Effect } from '../utility/CommonModels';

export interface ContestEffect {
  id: number;
  appeal: number;
  jam: number;
  effect_entires: Effect[];
}
