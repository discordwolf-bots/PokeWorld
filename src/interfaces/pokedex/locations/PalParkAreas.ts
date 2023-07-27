import { PokemonSpecies } from '../pokemon/PokemonSpecies';
import { Name } from '../utility/CommonModels';

export interface PalParkArea {
  id: number;
  name: string;
  names: Name[];
  pokemon_encounters: PalParkEncounterSpecies[];
}

export interface PalParkEncounterSpecies {
  base_score: number;
  rate: number;
  pokemon_species: PokemonSpecies;
}
