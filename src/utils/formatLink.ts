/**
 * The function removes "tel:" and "mailto:" from a given string.
 * @param {string} value - The parameter `value` is a string that may contain a telephone number or an
 * email address with the prefix "tel:" or "mailto:". The function `formatLinkValue` removes these
 * prefixes from the string and returns the cleaned value.
 * @returns The function `formatLinkValue` takes a string parameter `value` and returns a new string
 * with the substrings "tel:" and "mailto:" removed.
 */
export const formatLinkValue = (value: string) => {
  return value.replace("tel:", "").replace("mailto:", "");
};
