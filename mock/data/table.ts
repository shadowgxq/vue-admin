import { Random } from 'mockjs';
import { resultPageSuccess } from '../_util'
import Mock from 'mockjs'
function getRandomPics(count = 10): string[] {
    const arr: string[] = [];
    for (let i = 0; i < count; i++) {
        arr.push(Random.image('800x600', Random.color(), Random.color(), Random.title()));
    }
    return arr;
}
const demoList = (() => {
    const result: any[] = [];
    for (let index = 0; index < 200; index++) {
        result.push(Mock.mock({
            id: `${index}`,
            beginTime: '@datetime',
            endTime: '@datetime',
            address: '@city()',
            name: '@cname()',
            name1: '@cname()',
            name2: '@cname()',
            name3: '@cname()',
            "age|1-100": 1,
            radio1: `选项${index + 1}`,
            radio2: `选项${index + 1}`,
            radio3: `选项${index + 1}`,
            avatar: Random.image('400x400', Random.color(), Random.color(), Random.first()),
            imgArr: getRandomPics(Math.ceil(Math.random() * 3) + 1),
            imgs: getRandomPics(Math.ceil(Math.random() * 3) + 1),
            date: `@date('yyyy-MM-dd')`,
            time: `@time('HH:mm')`,
            'no|100000-10000000': 100000,
            'status|1': ['normal', 'enable', 'disable'],
        }));
    }
    return result;
})();

export default [
    {
        url: '/basic-api/table/getDemoList',
        timeout: 100,
        method: 'post',
        response: ({ body }) => {
            let query = JSON.parse(body)
            const { page = 1, pageSize = 20 } = query;
            return resultPageSuccess(page, pageSize, demoList);
        },
    },
] 