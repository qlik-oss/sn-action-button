import { usePromise } from "@nebula.js/stardust";
import { getImageUrl } from "../utils/url-utils";

// Create a promise that ensures the button background image is loaded properly
// and the image url is resolved.
const imagePromise = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve("resolved");
    img.onerror = () => reject(new Error(undefined));
  });

const useLoadImage = (layout, app) => {
  const url = layout.style?.background?.url;
  usePromise(async () => {
    if (url?.qStaticContentUrl?.qUrl) {
      await imagePromise(getImageUrl(url?.qStaticContentUrl?.qUrl, app));
    }
  }, [url]);
};

export default useLoadImage;
