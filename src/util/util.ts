type TimerId = ReturnType<typeof setTimeout>;

export function cloneDeep(value, cloned = new WeakMap()) {
    if (value == null) {
        return value;
    }

    if (typeof value !== 'object') {
        return value;
    }

    if (value instanceof Date) {
        return new Date(value);
    }

    if (Array.isArray(value)) {
        return value.map((item) => cloneDeep(item, cloned));
    }

    // Check if the value is an object (excluding special objects like RegExp, Set, Map, etc.)
    if (typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
        if (cloned.has(value)) {
            return cloned.get(value);
        }

        const clonedObj = {};
        cloned.set(value, clonedObj);

        for (const key in value) {
            if (Object.prototype.hasOwnProperty.call(value, key)) {
                clonedObj[key] = cloneDeep(value[key], cloned);
            }
        }

        return clonedObj;
    }

    return value;
}

/**
 * debounce
 */
export function debounce(func, delay) {
    let timer: TimerId | null = null
    return function (this: any, ...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            func.apply(this, args)
        }, delay)
    }
}

/**
 * 动态加载js
 * @param src 
 * @returns Promise
 */
export function loadScriptAsync(src) {
    return new Promise(function (resolve, reject) {
        var script = document.createElement('script');
        script.async = true;
        script.src = src;

        script.onload = function () {
            resolve(script);
        };

        script.onerror = function () {
            reject(new Error('Script load error: ' + src));
        };

        document.head.appendChild(script);
    });
}

/**
 * 数组去重
 * @param arr 
 */
export function unique(arr) {
    arr = arr.sort()
    let _arr: Array<any> = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i + 1]) _arr.push(arr[i])
    }
    return _arr
}

/**
 * Polling Execution
 * @param executor: () => Promise
 * @param condition 
 * @param delay 
 * @param timeout 
 * 
 */
export const getFuncOnLoopCondition = (executor, condition, delay = 1000, timeout = 10 * 1000) => {
    if (typeof executor !== 'function') return console.warn(`getFuncOnLoopCondition'executor must be function,but get ${typeof executor}`)
    if (typeof condition !== 'function') return console.warn(`getFuncOnLoopCondition'condition must be function,but get ${typeof condition}`)
    const start = performance.now()
    let timer: any = null
    return new Promise((resolve, reject) => {
        const loop = function (this: any, executor, condition, delay) {
            if (performance.now() - start > timeout) {
                if (timer) clearTimeout(timer)
                return reject(`time out`)
            }
            const finished = condition.apply(this)
            if (finished) {
                if (timer) clearTimeout(timer)
                const res = (...args) => {
                    return executor.apply(this, args)
                }
                resolve(res)
            } else {
                timer = setTimeout(() => {
                    console.log('setTimeout')
                    loop(executor, condition, delay)
                }, delay)
            }
        }
        loop.call(this, executor, condition, delay)
    })
}

/**
 * 获取类型 
 * @param target 
 */
export function getObjType(target) {
    return Object.prototype.toString.call(target).slice(8, -1)
}