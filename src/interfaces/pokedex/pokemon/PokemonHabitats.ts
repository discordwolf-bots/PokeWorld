import { Name } from '../utility/CommonModels';
import { PokemonSpecies } from './PokemonSpecies';

export interface PokemonHabitat {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}
