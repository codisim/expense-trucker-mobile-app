import { IGenericStringMap, IToCamelCase } from "@/store/useExpenseStore.types";


const toCamelCase: IToCamelCase = (str) => {
    return str.replace(/([-_][a-z])/gi, (match) => {
        return match.toUpperCase().replace("-", "").replace("_", "");
    });
}


const convertKeysToCamelCase = <T>(obj: T): T => {
    if (Array.isArray(obj)) {
        const mappedArray = obj.map(convertKeysToCamelCase) as unknown;
        return mappedArray as T;
    }
    if (obj !== null && typeof obj === "object") {
        const keys = Object.keys(obj);
        
        return keys.reduce((result: T, key: string) => {
            const camelKey = toCamelCase(key);
            (result as IGenericStringMap)[camelKey] = (obj as IGenericStringMap)[key];
            return result;
        }, {} as T);
    }
    return obj;
};

export { convertKeysToCamelCase, toCamelCase };
