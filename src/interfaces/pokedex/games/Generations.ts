import { Region } from '../locations/Regions';
import { Move } from '../moves/Moves';
import { Ability } from '../pokemon/Abilities';
import { PokemonSpecies } from '../pokemon/PokemonSpecies';
import { Type } from '../pokemon/Types';
import { Name } from '../utility/CommonModels';
import { VersionGroup } from './VersionGroups';

export interface Generation {
  id: number;
  name: string;
  abilities: Ability[];
  names: Name[];
  main_region: Region;
  moves: Move[];
  pokemon_species: PokemonSpecies[];
  types: Type[];
  version_groups: VersionGroup[];
}
