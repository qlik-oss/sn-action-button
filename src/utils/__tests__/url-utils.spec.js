import { getImageUrl } from "../url-utils";

describe("urlUtils", () => {
  const app = {
    session: {
      config: {
        url: "wss://example.com/app/12345-5678",
      },
    },
  };

  describe("getImageUrl", () => {
    it("should return image url", () => {
      const imageUrl = "someUrl";
      const result = getImageUrl(imageUrl, app);
      expect(result).toEqual(`https://example.com/someUrl`);
    });

    it("should remove / from beginning of url", () => {
      const imageUrl = "/someUrl";
      const result = getImageUrl(imageUrl, app);
      expect(result).toEqual(`https://example.com/someUrl`);
    });

    it("should keep prefix if there is one", () => {
      app.session.config.url = "wss://example.com/prefix/app/12345-5678";
      const imageUrl = "/someUrl";
      const result = getImageUrl(imageUrl, app);
      expect(result).toEqual(`https://example.com/prefix/someUrl`);
    });
  });
});
