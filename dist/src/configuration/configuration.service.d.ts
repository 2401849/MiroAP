import { ConfigParameters } from "./interfaces/configuration.interface";
export declare class ConfigurationService {
    private readonly parameters;
    getParameters(): ConfigParameters[];
    getInterface(): string;
}
