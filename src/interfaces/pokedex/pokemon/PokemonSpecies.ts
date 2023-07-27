import { EvolutionChain } from '../evolution/EvolutionChains';
import { Generation } from '../games/Generations';
import { Pokedex } from '../games/Pokedexes';
import { PalParkArea } from '../locations/PalParkAreas';
import { Description, FlavorText, Name } from '../utility/CommonModels';
import { Language } from '../utility/Languages';
import { EggGroup } from './EggGroups';
import { GrowthRate } from './GrowthRates';
import { Pokemon } from './Pokemon';
import { PokemonColor } from './PokemonColors';
import { PokemonHabitat } from './PokemonHabitats';
import { PokemonShape } from './PokemonShapes';

export interface PokemonSpecies {
  id: number;
  name: string;
  order: number;
  gender_rate: number;
  capture_rate: number;
  base_happiness: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  hatch_counter: number;
  has_gender_differences: boolean;
  forms_switchable: boolean;
  growth_rate: GrowthRate;
  pokedex_numbers: PokemonSpeciesDexEntry[];
  egg_groups: EggGroup[];
  color: PokemonColor;
  shape: PokemonShape;
  evolves_from_species: PokemonSpecies;
  evolution_chain: EvolutionChain;
  habitat: PokemonHabitat;
  generation: Generation;
  names: Name[];
  pal_park_encounters: PalParkEncounterArea[];
  flavor_text_entries: FlavorText[];
  form_descriptions: Description[];
  genera: Genus[];
  varieties: PokemonSpeciesVariety[];
}

export interface Genus {
  genus: string;
  language: Language;
}

export interface PokemonSpeciesDexEntry {
  entry_number: number;
  pokedex: Pokedex;
}

export interface PalParkEncounterArea {
  base_score: number;
  rate: number;
  area: PalParkArea;
}

export interface PokemonSpeciesVariety {
  is_default: boolean;
  pokemon: Pokemon;
}
