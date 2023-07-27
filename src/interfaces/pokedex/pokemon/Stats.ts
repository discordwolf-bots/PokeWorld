import { MoveDamageClass } from '../moves/MoveDamageClasses';
import { Move } from '../moves/Moves';
import { Name } from '../utility/CommonModels';
import { Characteristic } from './Characteristics';
import { Nature } from './Natures';

export interface Stat {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: MoveStatAffectSets;
  affecting_natures: NatureStatAffectSets;
  characteristics: Characteristic[];
  move_damage_class: MoveDamageClass;
  names: Name[];
}

export interface MoveStatAffectSets {
  increase: MoveStatAffect[];
  decrease: MoveStatAffect[];
}

export interface MoveStatAffect {
  change: number;
  move: Move;
}

export interface NatureStatAffectSets {
  increase: Nature[];
  decrease: Nature[];
}
