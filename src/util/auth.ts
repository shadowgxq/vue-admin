const TOKEN_KEY = "TOKEN__"
import { Persistent } from './persistent'

export function getToken() {
    return getAuthCache(TOKEN_KEY);
}

export function getAuthCache<T>(key) {
    const fn = Persistent.getLocal
    return fn(key) as T;
}