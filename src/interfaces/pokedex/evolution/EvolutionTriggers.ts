import { PokemonSpecies } from '../pokemon/PokemonSpecies';
import { Name } from '../utility/CommonModels';

export interface EvolutionTrigger {
  id: number;
  name: string;
  pokemon_species: PokemonSpecies[];
  names: Name[];
}
