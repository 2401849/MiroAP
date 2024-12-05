export type QualitativeMetric = Omit<Metric, "value"> & {
    name: "elements_created_at" | "elements_content";
    type: "application/json";
};
export type QuantitativeMetric = Omit<Metric, "value"> & {
    name: "elements_count";
    type: "integer";
};
export interface AnalyticsActivity {
    id: string;
    qualitatives: QualitativeMetric[];
    quantitatives: QuantitativeMetric[];
}
