import { ConfigParameters } from "src/configuration/interfaces/configuration.interface";

export interface Activity {
  activityID: string;
  IstdID: string;
  json_params: ConfigParameters;
}
