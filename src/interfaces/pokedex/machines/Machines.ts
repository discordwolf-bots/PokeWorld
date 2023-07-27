import { VersionGroup } from '../games/VersionGroups';
import { Item } from '../items/Item';
import { Move } from '../moves/Moves';

export interface Machine {
  id: number;
  item: Item;
  move: Move;
  version_group: VersionGroup;
}
