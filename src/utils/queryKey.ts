export const getQueryKey = (key: string | string[], params?: Record<any, any>) => {
  return Array.isArray(key) ? [...key, params] : [key, params];
};
