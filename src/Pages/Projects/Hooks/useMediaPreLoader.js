import { useEffect, useState } from "react";

export function useMediaPreLoader(images = []) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });

    const preload = async () => {
      try {
        await Promise.all([...images.map(loadImage)]);
        setLoaded(true);
      } catch (error) {
        console.log("Error cargando los medios:", error);
      }
    };

    preload();
  }, [images]);

  return loaded;
}
