import { Name } from '../utility/CommonModels';
import { EncounterConditionValue } from './EncounterConditionValues';

export interface EncounterCondition {
  id: number;
  name: string;
  values: EncounterConditionValue[];
  names: Name[];
}
