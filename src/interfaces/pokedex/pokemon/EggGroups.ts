import { Name } from '../utility/CommonModels';
import { PokemonSpecies } from './PokemonSpecies';

export interface EggGroup {
  id: number;
  name: string;
  names: Name[];
  pokemon_species: PokemonSpecies[];
}
