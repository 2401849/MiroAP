export interface Metric<T> {
    name: string;
    type: string;
    value: T;
}
export type QualitativeMetric = Metric<string>;
export type QuantitativeMetric = Metric<number>;
