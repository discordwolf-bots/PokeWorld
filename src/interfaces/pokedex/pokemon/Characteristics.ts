import { Description } from '../utility/CommonModels';
import { Stat } from './Stats';

export interface Characteristic {
  id: number;
  gene_modulo: number;
  possible_values: number[];
  highest_stat: Stat;
  descriptions: Description[];
}
