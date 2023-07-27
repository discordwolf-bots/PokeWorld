import { Name } from '../utility/CommonModels';
import { Nature } from './Natures';

export interface PokeathlonStat {
  id: number;
  name: string;
  names: Name[];
  affecting_natures: NaturePokeathlonStatAffectSets;
}

export interface NaturePokeathlonStatAffectSets {
  increase: NaturePokeathlonStatAffect;
  decrease: NaturePokeathlonStatAffect;
}

export interface NaturePokeathlonStatAffect {
  max_change: number;
  nature: Nature;
}
