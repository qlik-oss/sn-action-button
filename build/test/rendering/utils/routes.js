"use strict";
module.exports = function (baseUrl) { return ({
    renderFixture: function (fixturePath) { return "".concat(baseUrl, "/render?fixture=").concat(fixturePath); },
}); };
