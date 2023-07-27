import { ContestEffect } from '../contests/ContestEffects';
import { ContestType } from '../contests/ContestTypes';
import { SuperContestEffect } from '../contests/SuperContestEffects';
import { Generation } from '../games/Generations';
import { VersionGroup } from '../games/VersionGroups';
import { AbilityEffectChange } from '../pokemon/Abilities';
import { Pokemon } from '../pokemon/Pokemon';
import { Stat } from '../pokemon/Stats';
import { Type } from '../pokemon/Types';
import {
  MachineVersionDetail,
  Name,
  VerboseEffect,
} from '../utility/CommonModels';
import { Language } from '../utility/Languages';
import { MoveAilment } from './MoveAilments';
import { MoveCategory } from './MoveCategories';
import { MoveDamageClass } from './MoveDamageClasses';
import { MoveTarget } from './MoveTargets';

export interface Move {
  id: number;
  name: string;
  accuracy: number;
  effect_chance: number;
  pp: number;
  priority: number;
  power: number;
  contest_combos: ContestComboSets;
  contest_type: ContestType;
  contest_effect: ContestEffect;
  damage_class: MoveDamageClass;
  effect_entries: VerboseEffect[];
  effect_changes: AbilityEffectChange[];
  learned_by_pokemon: Pokemon[];
  flavor_text_entries: MoveFlavorText[];
  generation: Generation[];
  machines: MachineVersionDetail[];
  meta: MoveMetaData;
  names: Name[];
  past_values: PastMoveStatValues[];
  stat_changes: MoveStatChange[];
  super_contest_effect: SuperContestEffect;
  target: MoveTarget;
  type: Type;
}

export interface ContestComboSets {
  normal: ContestComboDetail;
  super: ContestComboDetail;
}

export interface ContestComboDetail {
  use_before: Move;
  use_after: Move;
}

export interface MoveFlavorText {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

export interface MoveMetaData {
  ailment: MoveAilment;
  category: MoveCategory;
  min_hits: number;
  max_hits: number;
  min_turns: number;
  max_turns: number;
  drain: number;
  healing: number;
  crit_rate: number;
  ailment_chance: number;
  flinch_chance: number;
  stat_chance: number;
}

export interface MoveStatChange {
  change: number;
  stat: Stat;
}

export interface PastMoveStatValues {
  accuracy: number;
  effect_chance: number;
  power: number;
  pp: number;
  effect_entries: VerboseEffect[];
  type: Type;
  version_group: VersionGroup;
}
