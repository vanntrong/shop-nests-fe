import Cookies from "js-cookie";

export const getCookie = (name: string) => {
  return Cookies.get(name);
};

export const setCookie = (name: string, value: string, options?: Cookies.CookieAttributes) => {
  return Cookies.set(name, value, options);
};

export const removeCookie = (name: string) => {
  return Cookies.remove(name);
};
