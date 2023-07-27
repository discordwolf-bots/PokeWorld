import { EncounterMethod } from '../encounters/EncounterMethod';
import { Version } from '../games/Version';
import { Pokemon } from '../pokemon/Pokemon';
import { Name, VersionEncounterDetail } from '../utility/CommonModels';
import { Location } from './Locations';

export interface LocationArea {
  id: number;
  name: string;
  game_index: number;
  names: Name[];
  encounter_method_rates: EncounterMethodRate[];
  location: Location;
  pokemon_encounters: PokemonEncounter[];
}

export interface EncounterMethodRate {
  encounter_method: EncounterMethod;
  version_details: EncounterVersionDetails[];
}

export interface EncounterVersionDetails {
  rate: number;
  version: Version;
}

export interface PokemonEncounter {
  pokemon: Pokemon;
  version_details: VersionEncounterDetail[];
}
