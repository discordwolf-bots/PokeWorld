import { Region } from '../locations/Regions';
import { PokemonSpecies } from '../pokemon/PokemonSpecies';
import { Description, Name } from '../utility/CommonModels';
import { VersionGroup } from './VersionGroups';

export interface Pokedex {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  pokemon_entries: PokemonEntry[];
  region: Region;
  version_groups: VersionGroup[];
}

export interface PokemonEntry {
  entry_number: number;
  pokemon_species: PokemonSpecies;
}
