import { TOKEN_S } from '@/core/code/core.code';
import { Persistent } from './persistent'

export function getToken() {
    return getAuthCache(TOKEN_S)
}

//basic auth func
export function getAuthCache<T>(key: string) {
    const fn = Persistent.getLocal
    return fn(key) as T;
}

export function setAuthCache<T>(key: string, value: T, expiration = 0) {
    const fn = Persistent.setLocal
    fn(key, value, expiration)
}

export function removeAuthCache(key: string) {
    const fn = Persistent.removeLocal
    fn(key)
}