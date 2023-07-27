import { Name } from '../utility/CommonModels';
import { VersionGroup } from './VersionGroups';

export interface Version {
  id: number;
  name: string;
  version_group: VersionGroup;
  names: Name[];
}
