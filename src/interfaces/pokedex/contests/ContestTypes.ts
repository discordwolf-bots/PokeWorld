import { BerryFlavor } from '../berries/BerryFlavors';

export interface ContestType {
  id: number;
  name: string;
  berry_flavor: BerryFlavor;
  names: ContestName[];
}

export interface ContestName {
  name: string;
  color: string;
}
