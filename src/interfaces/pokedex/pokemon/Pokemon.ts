import { Generation } from '../games/Generations';
import { Version } from '../games/Version';
import { VersionGroup } from '../games/VersionGroups';
import { Item } from '../items/Item';
import { MoveLearnMethod } from '../moves/MoveLearnMethods';
import { Move } from '../moves/Moves';
import { VersionGameIndex } from '../utility/CommonModels';
import { Ability } from './Abilities';
import { PokemonSpeciesGender } from './Genders';
import { PokemonForm } from './PokemonForms';
import { Stat } from './Stats';
import { Type } from './Types';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: PokemonForm[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species: PokemonSpeciesGender;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: Ability;
}

export interface PokemonType {
  slot: number;
  type: Type;
}

export interface PokemonFormType {
  slot: number;
  type: Type;
}

export interface PokemonTypePast {
  generation: Generation;
  types: PokemonType[];
}

export interface PokemonHeldItem {
  item: Item[];
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: Version;
  rarity: number;
}

export interface PokemonMove {
  move: Move[];
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: MoveLearnMethod;
  version_group: VersionGroup;
  level_learned_at: number;
}

export interface PokemonStat {
  stat: Stat;
  effort: number;
  base_stat: number;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_female_shiny: string;
}
