import { VersionGroup } from '../games/VersionGroups';
import { Name } from '../utility/CommonModels';
import { Pokemon, PokemonFormType } from './Pokemon';

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: Pokemon;
  types: PokemonFormType[];
  sprites: PokemonFormSprites;
  version_group: VersionGroup;
  names: Name[];
  form_names: Name[];
}

export interface PokemonFormSprites {
  front_default: string;
  front_shiny: string;
}
