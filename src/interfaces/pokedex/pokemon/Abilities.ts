import { VersionGroup } from '../games/VersionGroups';
import { VerboseEffect } from '../utility/CommonModels';
import { Language } from '../utility/Languages';
import { Pokemon } from './Pokemon';

export interface Ability {
  id: number;
  name: string;
  effect_entry: VerboseEffect;
}

export interface AbilityEffectChange {
  effect_entries: string[];
  version_group: VersionGroup;
}

export interface AbilityFlavorText {
  flavor_text: string;
  language: Language;
  version_group: VersionGroup;
}

export interface AbilityPokemon {
  is_hidden: boolean;
  slot: number;
  pokemon: Pokemon;
}
