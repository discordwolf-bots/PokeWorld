import { EvolutionChain } from '../evolution/EvolutionChains';
import { Version } from '../games/Version';
import { Pokemon } from '../pokemon/Pokemon';
import {
  GenerationGameIndex,
  MachineVersionDetail,
  VerboseEffect,
  VersionGroupFlavorText,
} from '../utility/CommonModels';
import { ItemAttribute } from './ItemAttributes';
import { ItemCategory } from './ItemCategories';
import { ItemFlingEffect } from './ItemFlingEffects';

export interface Item {
  id: number;
  name: string;
  cost: number;
  fling_power: number;
  fling_effect: ItemFlingEffect;
  attributes: ItemAttribute;
  category: ItemCategory;
  effect_entries: VerboseEffect[];
  flavor_text_entries: VersionGroupFlavorText[];
  game_indices: GenerationGameIndex[];
  sprites: ItemSprites;
  held_by_pokemon: ItemHolderPokemon;
  baby_trigger_for: EvolutionChain;
  machines: MachineVersionDetail[];
}

export interface ItemSprites {
  default: string;
}

export interface ItemHolderPokemon {
  pokemon: Pokemon;
  version_details: ItemHolderPokemonVersionDetail[];
}

export interface ItemHolderPokemonVersionDetail {
  rarity: number;
  version: Version;
}
