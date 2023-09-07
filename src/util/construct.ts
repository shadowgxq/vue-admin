type FilteredObject<T, K extends keyof T> = Omit<T, K>;

export function filterObjectProps<T extends object, K extends keyof T>(
    target: T,
    propsToExclude: K[]
): FilteredObject<T, K> {
    const filtered: FilteredObject<T, K> = Object.keys(target).reduce((result, key) => {
        if (!propsToExclude.includes(key as K)) {
            result[key] = target[key];
        }
        return result;
    }, {} as FilteredObject<T, K>);
    return filtered;
}

export function getValueByArrayKeys(obj, keys) {
    let result = obj;
    for (const key of keys) {
        if (result && result.hasOwnProperty(key)) {
            result = result[key];
        } else {
            return undefined; // 如果属性不存在，返回 undefined 或者可以根据需求返回其他默认值
        }
    }
    return result;
}
