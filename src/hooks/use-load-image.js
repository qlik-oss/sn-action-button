import { usePromise } from "@nebula.js/stardust";
import { getImageUrl } from "../utils/url-utils";

// Create a promise that ensures the button background image is loaded properly
const imagePromise = (url, app) =>
  new Promise((resolve, reject) => {
    const imgUrl = getImageUrl(url, app);
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => resolve(img);
    img.onerror = () => reject(img);
  });

const useLoadImage = (layout, app) => {
  const { url } = layout.style.background;
  const [isBackgroundLoaded = false, error] = usePromise(async () => {
    if (url?.qStaticContentUrl?.qUrl) {
      try {
        await imagePromise(url.qStaticContentUrl.qUrl, app);
        return true;
      } catch {
        return false;
      }
    }
    return false;
  }, [layout]);
  if (error) {
    // eslint-disable-next-line no-console
    console.log("Failed to load image.");
    return false;
  }
  return !!isBackgroundLoaded;
};

export default useLoadImage;
