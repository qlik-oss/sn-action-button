function checkForPrefix(url) {
  // Multinoded windows Can add prefix to their url so here we check if we can find a prefix
  const endUrl = String(url).split(url.host)[1];
  const urlArray = endUrl.split('/');
  return urlArray[1] === 'app' ? '' : `/${urlArray[1]}`;
}

function getSenseServerUrl(app) {
  let config;
  let wsUrl;
  let protocol;
  let isSecure;

  if (app?.session?.config) {
    config = app.session.config;
    wsUrl = new URL(config.url);
    const prefix = checkForPrefix(wsUrl);
    isSecure = wsUrl.protocol === 'wss:';
    protocol = isSecure ? 'https://' : 'http://';
    return protocol + wsUrl.host + prefix;
  }
  return undefined;
}

const getImageUrl = (imgUrl, app) => {
  imgUrl.replace(/^\.\.\//i, '/');
  imgUrl = imgUrl.replace(/"/g, '\\"');
  imgUrl = imgUrl.replace(/'/g, "\\'");
  const baseUrl = getSenseServerUrl(app);
  const rootPath = `${baseUrl }/`;
  imgUrl = rootPath + (imgUrl[0] === '/' ? imgUrl.substr(1) : imgUrl);
  return imgUrl;
};

export default {
  getImageUrl,
  getSenseServerUrl,
};
