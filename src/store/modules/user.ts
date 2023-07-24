import { getAuthCache, setAuthCache } from '@/util';
import { defineStore } from 'pinia'
import { UserInfo } from '../types';
import { TOKEN_S, USER_INFO } from '@/core/code/core.code';
interface UserState {
    token?: string,
    userInfo: UserInfo | null
}

export const useUserStore = defineStore({
    id: "user",
    state: (): UserState => ({
        userInfo: null,
        token: undefined,

    }),
    getters: {
        getToken(state): string {
            return state.token || getAuthCache<string>(TOKEN_S);
        },
        getUserInfo(state): UserInfo {
            return state.userInfo || getAuthCache<UserInfo>(USER_INFO)
        }
    },
    actions: {
        setToken(info: string | undefined) {
            this.token = info ? info : ''; // for null or undefined value
            setAuthCache(TOKEN_S, info);
        },
        setUserInfo(info: UserInfo | null) {
            this.userInfo = info;
            setAuthCache(USER_INFO, info);
        },
    }
})