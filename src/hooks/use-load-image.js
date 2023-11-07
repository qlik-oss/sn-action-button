import { usePromise } from "@nebula.js/stardust";

// Create a promise that ensures the button background image is loaded properly
// and the image url is resolved.
const imagePromise = (url) =>
  new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;
    img.onload = () => resolve("resolved");
    img.onerror = () => reject(new Error(undefined));
  });

const useLoadImage = (layout) => {
  const url = layout.style?.background?.url ?? undefined;
  usePromise(async () => {
    if (url?.qStaticContentUrl?.qUrl) {
      await imagePromise(url?.qStaticContentUrl?.qUrl);
    }
  }, [url]);
};

export default useLoadImage;
