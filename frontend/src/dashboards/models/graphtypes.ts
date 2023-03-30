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

export interface manager {
    _id: string,
    username: string,
    image: string,
    role: number,
    email: string,
    title: string,
    position: string,
    firstname: string,
    lastname: string,
}

export interface teammember {
    _id: string,
    username: string,
    image: string,
    role: number,
    email: string,
    title: string,
    position: string,
    location: string,
    firstname: string,
    lastname: string,
}