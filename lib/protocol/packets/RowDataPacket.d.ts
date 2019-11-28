
declare interface RowDataPacket<T=any> extends Array<Object> {
    constructor: {
        name: 'RowDataPacket'
    };
    [column: string]: any;
    [column: number]: any;
}

export = RowDataPacket;
