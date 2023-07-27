import { PokemonSpecies } from './PokemonSpecies';

export interface Gender {
  id: number;
  name: string;
  pokemon_species_details: PokemonSpeciesGender[];
  required_for_evolution: PokemonSpecies[];
}

export interface PokemonSpeciesGender extends Gender {
  rate: number;
  pokemon_species: PokemonSpecies;
}
