import { Generation } from '../games/Generations';
import { Pokedex } from '../games/Pokedexes';
import { VersionGroup } from '../games/VersionGroups';
import { Name } from '../utility/CommonModels';
import { Location } from './Locations';

export interface Region {
  id: number;
  locations: Location[];
  name: string;
  names: Name[];
  main_generation: Generation;
  pokedexes: Pokedex[];
  version_groups: VersionGroup[];
}
