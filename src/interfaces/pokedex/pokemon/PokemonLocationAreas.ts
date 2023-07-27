import { LocationArea } from '../locations/LocationAreas';
import { VersionEncounterDetail } from '../utility/CommonModels';

export interface LocationAreaEncounter {
  location_area: LocationArea;
  version_details: VersionEncounterDetail[];
}
