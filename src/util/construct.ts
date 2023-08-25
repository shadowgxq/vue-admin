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