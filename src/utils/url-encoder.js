const HTTP_PROTOCOL = "http://";
const HTTPS_PROTOCOL = "https://";
const EMAIL_PROTOCOL = "mailto:";

export const getCurrentProtocol = (s) => {
  if (s.startsWith(HTTP_PROTOCOL)) {
    return HTTP_PROTOCOL;
  }
  if (s.startsWith(HTTPS_PROTOCOL)) {
    return HTTPS_PROTOCOL;
  }
  if (s.startsWith(EMAIL_PROTOCOL)) {
    return EMAIL_PROTOCOL;
  }
  return HTTP_PROTOCOL;
};

export const removeProtocolHttp = (s) => {
  let res = s;
  if (s.startsWith(HTTP_PROTOCOL)) {
    res = s.slice(HTTP_PROTOCOL.length);
  }
  if (s.startsWith(HTTPS_PROTOCOL)) {
    res = s.slice(HTTPS_PROTOCOL.length);
  }
  return res;
};

export const urlHasEmailProtocol = (string) => {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === EMAIL_PROTOCOL;
};

/**
 * RegExp to match non-URL code points, *after* encoding (i.e. not including "%")
 * and including invalid escape sequences.
 */

const ENCODE_CHARS_REGEXP =
  /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g;

/**
 * RegExp to match unmatched surrogate pair.
 */

const UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g;

/**
 * String to replace unmatched surrogate pair with.
 */

const UNMATCHED_SURROGATE_PAIR_REPLACE = "$1\uFFFD$2";

/**
 * https://www.npmjs.com/package/encodeurl
 * Encode a URL to a percent-encoded form, excluding already-encoded sequences.
 *
 * This function will take an already-encoded URL and encode all the non-URL
 * code points. This function will not encode the "%" character unless it is
 * not part of a valid sequence (`%20` will be left as-is, but `%foo` will
 * be encoded as `%25foo`).
 *
 * This encode is meant to be "safe" and does not throw errors. It will try as
 * hard as it can to properly encode the given URL, including replacing any raw,
 * unpaired surrogate pairs with the Unicode replacement character prior to
 * encoding.
 *
 * @param {string} url
 * @return {string}
 * @public
 */

export const encodeUrl = (url) =>
  String(url)
    .replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE)
    .replace(ENCODE_CHARS_REGEXP, encodeURI);
