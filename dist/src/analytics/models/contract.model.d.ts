import { AnalyticsActivity } from "./analytics.model";
type Contract<T> = Omit<T, "id">;
export declare const AnalyticsContract: Contract<AnalyticsActivity>;
export {};
