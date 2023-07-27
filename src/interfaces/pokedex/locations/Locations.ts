import { GenerationGameIndex, Name } from '../utility/CommonModels';
import { LocationArea } from './LocationAreas';
import { Region } from './Regions';

export interface Location {
  id: number;
  name: string;
  region: Region;
  names: Name[];
  game_indices: GenerationGameIndex[];
  areas: LocationArea[];
}
