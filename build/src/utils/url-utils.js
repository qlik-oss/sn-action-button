function checkForPrefix(url) {
    // Multinoded windows Can add prefix to their url so here we check if we can find a prefix
    var endUrl = String(url).split(url.host)[1];
    var urlArray = endUrl.split("/");
    return urlArray[1] === "app" ? "" : "/".concat(urlArray[1]);
}
function getSenseServerUrl(app) {
    var _a;
    var wsUrl;
    var protocol;
    var isSecure;
    if ((_a = app === null || app === void 0 ? void 0 : app.session) === null || _a === void 0 ? void 0 : _a.config) {
        var config = app.session.config;
        wsUrl = new URL(config.url);
        var prefix = checkForPrefix(wsUrl);
        isSecure = wsUrl.protocol === "wss:";
        protocol = isSecure ? "https://" : "http://";
        return protocol + wsUrl.host + prefix;
    }
    return undefined;
}
export var getImageUrl = function (imgUrl, app) {
    imgUrl.replace(/^\.\.\//i, "/");
    imgUrl = imgUrl.replace(/"/g, '\\"');
    imgUrl = imgUrl.replace(/'/g, "\\'");
    var baseUrl = getSenseServerUrl(app);
    var rootPath = "".concat(baseUrl, "/");
    imgUrl = rootPath + (imgUrl[0] === "/" ? imgUrl.substr(1) : imgUrl);
    return imgUrl;
};
export var inIframe = function () {
    try {
        return window.self !== window.top;
    }
    catch (error) {
        return true;
    }
};
