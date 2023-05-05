import { getImageUrl } from "../url-utils";
describe("urlUtils", function () {
    var app = {
        session: {
            config: {
                url: "wss://example.com/app/12345-5678",
            },
        },
    };
    describe("getImageUrl", function () {
        it("should return image url", function () {
            var imageUrl = "someUrl";
            var result = getImageUrl(imageUrl, app);
            expect(result).toEqual("https://example.com/someUrl");
        });
        it("should remove / from beginning of url", function () {
            var imageUrl = "/someUrl";
            var result = getImageUrl(imageUrl, app);
            expect(result).toEqual("https://example.com/someUrl");
        });
        it("should keep prefix if there is one", function () {
            app.session.config.url = "wss://example.com/prefix/app/12345-5678";
            var imageUrl = "/someUrl";
            var result = getImageUrl(imageUrl, app);
            expect(result).toEqual("https://example.com/prefix/someUrl");
        });
    });
});
