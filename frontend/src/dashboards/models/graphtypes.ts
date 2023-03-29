export interface kpiType {
    name:       string;
    metric:     number;
    compare:    number;
    comparedTo: string;
}

export interface series {
    name: string,
    data: number[]
}