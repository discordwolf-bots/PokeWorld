import { VersionGroup } from '../games/VersionGroups';
import { Description, Name } from '../utility/CommonModels';

export interface MoveLearnMethod {
  id: number;
  name: string;
  descriptions: Description[];
  names: Name[];
  version_groups: VersionGroup[];
}
