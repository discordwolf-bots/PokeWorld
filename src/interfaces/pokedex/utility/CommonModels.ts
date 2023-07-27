import { EncounterConditionValue } from '../encounters/EncounterConditionValues';
import { EncounterMethod } from '../encounters/EncounterMethod';
import { Generation } from '../games/Generations';
import { Version } from '../games/Version';
import { VersionGroup } from '../games/VersionGroups';
import { Machine } from '../machines/Machines';
import { Language } from './Languages';

export interface APIResource {
  url: string;
}

export interface Description {
  description: string;
  language: Language;
}

export interface Effect {
  effect: string;
  language: Language;
}

export interface Encounter {
  min_level: number;
  max_level: number;
  condition_values: EncounterConditionValue[];
  chance: number;
  method: EncounterMethod;
}

export interface FlavorText {
  flavor_text: string;
  language: Language;
  version: Version;
}

export interface GenerationGameIndex {
  game_index: number;
  generation: Generation;
}

export interface MachineVersionDetail {
  machine: Machine;
  version_group: VersionGroup;
}

export interface Name {
  name: string;
  language: Language;
}

export interface NamedAPIResource {
  name: string;
  url: string;
}

export interface VerboseEffect {
  effect: string;
  short_effect: string;
  language: Language;
}

export interface VersionEncounterDetail {
  version: Version;
  max_chance: number;
  encounter_details: Encounter[];
}

export interface VersionGameIndex {
  game_index: number;
  version: Version;
}

export interface VersionGroupFlavorText {
  text: string;
  language: Language;
}
