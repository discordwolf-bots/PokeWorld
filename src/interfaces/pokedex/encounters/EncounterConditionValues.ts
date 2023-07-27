import { Name } from '../utility/CommonModels';
import { EncounterCondition } from './EncounterConditions';

export interface EncounterConditionValue {
  id: number;
  name: string;
  condition: EncounterCondition;
  names: Name[];
}
