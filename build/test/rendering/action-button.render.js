var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import serve from "@nebula.js/cli-serve";
import { expect, test } from "@playwright/test";
import fs from "fs";
import path from "path";
import events from "./utils/events";
import createPlaywright from "./utils/playwright";
import createNebulaRoutes from "./utils/routes";
var paths = {
    artifacts: path.join(__dirname, "__artifacts__"),
    fixtures: path.join(__dirname, "__fixtures__"),
};
test.describe("sn action button: Rendering tests", function () {
    var nebulaServer;
    var playwright;
    var route;
    test.beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, serve({
                        entry: path.resolve(__dirname, "../../"),
                        type: "sn-action-button",
                        open: false,
                        build: false,
                        themes: [],
                        fixturePath: "test/rendering/__fixtures__",
                    })];
                case 1:
                    nebulaServer = _a.sent();
                    route = createNebulaRoutes(nebulaServer.url);
                    return [2 /*return*/];
            }
        });
    }); });
    test.afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            nebulaServer.close();
            return [2 /*return*/];
        });
    }); });
    test.beforeEach(function (_a) {
        var page = _a.page;
        events.addListeners(page);
    });
    test.afterEach(function (_a) {
        var page = _a.page;
        events.removeListeners(page);
    });
    fs.readdirSync(paths.fixtures).forEach(function (file) {
        var name = file.replace(".fix.js", "");
        var fixturePath = "./".concat(file);
        test(name, function (_a) {
            var page = _a.page;
            return __awaiter(void 0, void 0, void 0, function () {
                var renderUrl, img;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            playwright = createPlaywright(page);
                            return [4 /*yield*/, route.renderFixture(fixturePath)];
                        case 1:
                            renderUrl = _b.sent();
                            // Open page in Nebula which renders fixture
                            return [4 /*yield*/, playwright.open(renderUrl)];
                        case 2:
                            // Open page in Nebula which renders fixture
                            _b.sent();
                            return [4 /*yield*/, playwright.screenshot()];
                        case 3:
                            img = _b.sent();
                            // Compare screenshot with baseline image
                            expect(img).toMatchSnapshot("".concat(name, ".png"));
                            return [2 /*return*/];
                    }
                });
            });
        });
    });
});
