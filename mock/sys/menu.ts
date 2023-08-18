import { resultSuccess, resultError, getRequestToken, requestParams } from '../_util';
import { createFakeUserList } from './user';

// single
const dashboardRoute = {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'LAYOUT',
    redirect: '/dashboard/analysis',
    meta: {
        title: 'routes.dashboard.dashboard',
        hideChildrenInMenu: true,
        icon: 'HomeFilled',
    },
    children: [
        {
            path: 'analysis',
            name: '分析页',
            component: '/dashboard/analysis/index',
            meta: {
                hideMenu: false,
                hideBreadcrumb: true,
                title: 'routes.dashboard.analysis',
                currentActiveMenu: '/dashboard',
            },
        },
        {
            path: 'workbench',
            name: '工作台',
            component: '/dashboard/workbench/index',
            meta: {
                hideMenu: false,
                hideBreadcrumb: true,
                title: 'routes.dashboard.workbench',
                currentActiveMenu: '/dashboard',
            },
        },
    ],
};

const backRoute =
    [
        {
            path: 'page',
            name: '页面权限',
            component: '/permission/back/index',
            meta: {
                title: 'routes.demo.permission.backPage',
            },
        },
        {
            path: 'btn',
            name: '按钮权限',
            component: '/permission/back/Btn',
            meta: {
                title: 'routes.demo.permission.backBtn',
            },
        },
    ]


const authRoute = {
    path: '/permission',
    name: '权限管理',
    component: 'LAYOUT',
    redirect: '/permission/front/page',
    meta: {
        icon: 'UserFilled',
        title: 'routes.demo.permission.permission',
    },
    children: [...backRoute],
};

const componentRoute = {
    path: '/basicComponents',
    name: '基础组件',
    component: 'LAYOUT',
    redirect: '/basicComponents/formControls/formPage',
    meta: {
        icon: 'List',
        title: 'Custom Components',
    },
    children: [
        {
            path: 'formControls',
            name: '表单控件',
            meta: {
                title: 'Form Controls',
            },
            children: [
                {
                    path: 'formPage',
                    name: '表单页',
                    component: '/basicComponents/formControls/formPage',
                    meta: {
                        title: 'Form Page',
                    },
                },
                {
                    path: 'tablePage',
                    name: '表格页',
                    component: '/basicComponents/formControls/tablePage',
                    meta: {
                        title: 'Table Page',
                    },
                },
            ],
        },
        {
            path: 'queryTable',
            name: '查询表格',
            component: '/basicComponents/queryTable',
            meta: {
                title: 'Query Table',
            },
        },
    ],
};


const sysRoute = {
    path: '/system',
    name: '系统管理',
    component: 'LAYOUT',
    redirect: '/system/account',
    meta: {
        icon: 'Setting',
        title: 'routes.demo.system.moduleName',
    },
    children: [
        {
            path: 'account',
            name: '账号管理',
            meta: {
                title: 'routes.demo.system.account',
                ignoreKeepAlive: true,
            },
            component: '/system/account/index',
        },
        {
            path: 'account_detail/:id',
            name: '账号详情',
            meta: {
                hideMenu: true,
                title: 'routes.demo.system.account_detail',
                ignoreKeepAlive: true,
                showMenu: false,
                currentActiveMenu: '/system/account',
            },
            component: '/system/account/AccountDetail',
        },
        {
            path: 'role',
            name: '角色管理',
            meta: {
                title: 'routes.demo.system.role',
                ignoreKeepAlive: true,
            },
            component: '/system/role/index',
        },

        {
            path: 'menu',
            name: '菜单管理',
            meta: {
                title: 'routes.demo.system.menu',
                ignoreKeepAlive: true,
            },
            component: '/system/menu/index',
        },
        {
            path: 'dept',
            name: '部门管理',
            meta: {
                title: 'routes.demo.system.dept',
                ignoreKeepAlive: true,
            },
            component: '/system/dept/index',
        },
        {
            path: 'changePassword',
            name: '修改密码',
            meta: {
                title: 'routes.demo.system.password',
                ignoreKeepAlive: true,
            },
            component: '/system/password/index',
        },
    ],
};


export default [
    {
        url: '/basic-api/getMenuList',
        timeout: 1000,
        method: 'get',
        response: (request: requestParams) => {
            const token = getRequestToken(request)
            if (!token) {
                return resultError('Invalid token!');
            }
            const checkUser = createFakeUserList().find((item) => item.token === token);
            if (!checkUser) {
                return resultError('Invalid user token!');
            }
            const id = checkUser.userId;
            let menu: Object[];
            switch (id) {
                case '1':
                    dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[0].path;
                    menu = [dashboardRoute, componentRoute, sysRoute, authRoute];
                    break;
                case '2':
                    dashboardRoute.redirect = dashboardRoute.path + '/' + dashboardRoute.children[1].path;
                    menu = [dashboardRoute, componentRoute, authRoute];
                    break;
                default:
                    menu = [];
            }

            return resultSuccess(menu);
        },
    },
    //这个为什么报错
] as MockMethod[];