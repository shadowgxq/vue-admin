export class Persistent {
    private static memoryStorage: { [key: string]: { value: any, expiration?: number } } = {};

    static getLocal<T>(key: string): Nullable<T> {
        const item = this.memoryStorage[key];
        if (item && (!item.expiration || Date.now() < item.expiration)) {
            return item.value;
        } else {
            Reflect.deleteProperty(this.memoryStorage, key)
        }
        return null;
    }

    static setLocal(key: string, value: any, expiration?: number): void {
        const item = {
            value: value,
            expiration: expiration ? Date.now() + expiration : undefined
        };
        this.memoryStorage[key] = item;
    }
    
}
function initPersistent() {
    
}
initPersistent()