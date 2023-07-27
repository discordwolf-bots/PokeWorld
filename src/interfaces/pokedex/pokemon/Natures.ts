import { BerryFlavor } from '../berries/BerryFlavors';
import { MoveBattleStyle } from '../moves/MoveBattleStyles';
import { Name } from '../utility/CommonModels';
import { PokeathlonStat } from './PokeathlonStats';
import { Stat } from './Stats';

export interface Nature {
  id: number;
  name: string;
  decreased_stat: Stat;
  increased_stat: Stat;
  hates_flavor: BerryFlavor;
  likes_flavor: BerryFlavor;
  pokeathlon_stat_changes: NatureStatChange[];
  move_battle_style_preferences: MoveBattleStylePreference[];
  names: Name[];
}

export interface NatureStatChange {
  max_change: number;
  pokeathlon_stat: PokeathlonStat;
}

export interface MoveBattleStylePreference {
  low_hp_preference: number;
  high_hp_preference: number;
  move_battle_style: MoveBattleStyle;
}
