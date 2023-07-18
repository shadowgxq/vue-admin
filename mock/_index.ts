import Mock from 'mockjs'
const modules = import.meta.globEager('./**/*.ts');

const mockModules: any[] = [];
Object.keys(modules).forEach((key) => {
	if (key.includes('/_')) {
		return;
	}
	mockModules.push(...modules[key].default);
});
//mock导入
if (import.meta.env.DEV) {
	mockModules.forEach((module) => {
		Mock.mock(module.url, module.method, module.response);
	});
}
