import Mock from 'mockjs'
import { resultSuccess } from '../_util'
const roleList = (() => {
    const result: any = [];
    for (let index = 0; index < 4; index++) {
        result.push(Mock.mock({
            id: index + 1,
            orderNo: `${index + 1}`,
            roleName: ['超级管理员', '管理员', '文章管理员', '普通用户'][index],
            roleValue: '@first',
            createTime: '@datetime',
            remark: '@cword(10,20)',
            menu: [['0', '1', '2'], ['0', '1'], ['0', '2'], ['2']][index],
            'status|1': ['0', '1'],
        }));
    }
    return result;
})();
export default [
    {
        url: '/basic-api/system/getAllRoleList',
        timeout: 100,
        method: 'get',
        response: () => {
            return resultSuccess(roleList);
        },
    },
]