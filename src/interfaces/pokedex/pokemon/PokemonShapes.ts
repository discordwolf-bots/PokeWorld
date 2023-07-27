import { Name } from '../utility/CommonModels';
import { Language } from '../utility/Languages';
import { PokemonSpecies } from './PokemonSpecies';

export interface PokemonShape {
  id: number;
  name: string;
  awesome_names: AwesomeName[];
  names: Name[];
  pokemon_species: PokemonSpecies[];
}

export interface AwesomeName {
  awesome_name: string;
  language: Language;
}
