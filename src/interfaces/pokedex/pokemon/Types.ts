import { Generation } from '../games/Generations';
import { MoveDamageClass } from '../moves/MoveDamageClasses';
import { Move } from '../moves/Moves';
import { GenerationGameIndex, Name } from '../utility/CommonModels';
import { Pokemon } from './Pokemon';

export interface Type {
  id: number;
  name: string;
  damage_relations: TypeRelations;
  past_damage_relations: Type[];
  game_indices: GenerationGameIndex[];
  generation: Generation;
  move_damage_class: MoveDamageClass;
  names: Name[];
  pokemon: TypePokemon[];
  moves: Move[];
}

export interface TypePokemon {
  slot: number;
  pokemon: Pokemon;
}

export interface TypeRelations {
  no_damage_to: Type[];
  half_damage_to: Type[];
  double_damage_to: Type[];
  no_damage_from: Type[];
  half_damage_from: Type[];
  double_damage_from: Type[];
}

export interface TypeRelationsPast {
  generation: Generation;
  damage_relations: TypeRelations;
}
