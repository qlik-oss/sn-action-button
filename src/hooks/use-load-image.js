import { usePromise } from "@nebula.js/stardust";
import { getImageUrl } from "../utils/url-utils";

// Create a promise that ensures the button background image is loaded properly
// and the image url is resolved.
const imagePromise = (url, app) =>
  new Promise((resolve, reject) => {
    const imgUrl = getImageUrl(url, app);
    const img = new Image();
    img.src = imgUrl;
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(undefined));
  });

const useLoadImage = (layout, app) => {
  const { url } = layout.style.background;
  const [imageUrl] = usePromise(async () => {
    if (url?.qStaticContentUrl?.qUrl) {
      const imgSrc = await imagePromise(url.qStaticContentUrl.qUrl, app);
      return imgSrc.src;
    }
    return null;
  }, [layout, app]);
  return imageUrl;
};

export default useLoadImage;
