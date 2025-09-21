import { useEffect, useState } from "react";

export function useMediaPreLoader(images = [], video = "") {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (src) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });

    const loadVideo = (src) =>
      new Promise((resolve, reject) => {
        const videoElement = document.createElement("video");
        videoElement.preload = "auto";
        videoElement.src = src;
        videoElement.onloadeddata = resolve;
        videoElement.onerror = reject;
      });

    const preload = async () => {
      try {
        await Promise.all([
          ...images.map(loadImage),
          video !== "" && loadVideo(video),
        ]);
        setLoaded(true);
      } catch (error) {
        console.log("Error cargando los medios:", error);
      }
    };

    preload();
  }, [images, video]);

  return loaded;
}
