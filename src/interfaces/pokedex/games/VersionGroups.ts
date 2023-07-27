import { Region } from '../locations/Regions';
import { MoveLearnMethod } from '../moves/MoveLearnMethods';
import { Generation } from './Generations';
import { Pokedex } from './Pokedexes';
import { Version } from './Version';

export interface VersionGroup {
  id: number;
  name: string;
  order: number;
  generation: Generation;
  move_learn_methods: MoveLearnMethod[];
  pokedexes: Pokedex[];
  regions: Region[];
  versions: Version[];
}
