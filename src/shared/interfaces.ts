export interface ILoadResult {
    filter?: string
}

export interface ILoading{
    flag?: boolean;
}

export interface ITable{
    headers: string[];
    rows: IList[];
    maxRecordsPerView: number;
    rowValues: IObjectItem[];
    checkbox?: boolean;
    getSelectedRows?: any
}

export interface ITableRow {
    rowValues: IObjectItem[];
    list?: IList | any;
}

export interface IError{
    error: any;   
}

export interface IList{
    id: number;
    name: string;
    status: string;
    gender: string;
    type?: string;
    created?: string;
}

export interface IObjectItem {
    name: string; 
    value: string;   
}
