import { Description } from '../utility/CommonModels';
import { PokemonSpecies } from './PokemonSpecies';

export interface GrowthRate {
  id: number;
  name: string;
  formula: string;
  descriptions: Description[];
  levels: GrowthRateExperienceLevel[];
  pokemon_species: PokemonSpecies[];
}

export interface GrowthRateExperienceLevel extends GrowthRate {
  level: number;
  experience: number;
}
