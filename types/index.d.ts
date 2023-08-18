declare type Recordable<T = any> = Record<string, T>;

declare interface MockMethod {
    url: string;
    method?: MethodType;
    timeout?: number;
    statusCode?: number;
    response?: ((this: RespThisType, opt: {
        url: Recordable;
        body: Recordable;
        query: Recordable;
        headers: Recordable;
    }) => any) | any;
    rawResponse?: (this: RespThisType, req: IncomingMessage, res: ServerResponse) => void;
}