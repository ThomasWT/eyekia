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

export interface order {
    productname: string,
    color: string,
    soldloc: string,
    price: number,
    state: string
}

export interface platform {
    platform: string,
    followers: number,
    color: string,
}