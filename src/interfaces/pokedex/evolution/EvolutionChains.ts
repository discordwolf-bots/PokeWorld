import { Item } from '../items/Item';
import { Move } from '../moves/Moves';
import { PokemonSpecies } from '../pokemon/PokemonSpecies';
import { Type } from '../pokemon/Types';
import { EvolutionTrigger } from './EvolutionTriggers';

export interface EvolutionChain {
  id: number;
  baby_trigger_item: Item;
  chain: ChainLink;
}

export interface ChainLink {
  is_baby: boolean;
  species: PokemonSpecies;
  evolution_details: EvolutionDetail[];
  evolves_to: ChainLink[];
}

export interface EvolutionDetail {
  item: Item;
  trigger: EvolutionTrigger;
  gender: number;
  held_item: Item;
  known_move: Move;
  known_move_type: Type;
  location: Location;
  min_level: number;
  min_happiness: number;
  min_beauty: number;
  min_affection: number;
  needs_overworld_raid: boolean;
  party_species: PokemonSpecies;
  party_type: Type;
  relative_physical_stats: number;
  time_of_day: string;
  trade_species: PokemonSpecies;
}
