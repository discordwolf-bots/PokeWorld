import { Name } from '../utility/CommonModels';
import { PokemonSpecies } from './PokemonSpecies';

export interface PokemonColor {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}
