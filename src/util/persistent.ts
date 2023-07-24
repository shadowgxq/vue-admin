//持久化
export class Persistent {
    static getLocal<T>(key: string): Nullable<T> {
        const item = localStorage.getItem(key);
        if (item) {
            const parsedItem = JSON.parse(item);
            if (!parsedItem.expiration || Date.now() < parsedItem.expiration) {
                return parsedItem.value;
            } else {
                //remove fail key
                localStorage.removeItem(key); 
            }
        }
        return null;
    }

    static setLocal(key: string, value: any, expiration?: number): void {
        const item = {
            value: value,
            expiration: expiration ? Date.now() + expiration : undefined
        };
        localStorage.setItem(key, JSON.stringify(item));
    }

    static removeLocal(key: string) {
        localStorage.removeItem(key)
    }
}
