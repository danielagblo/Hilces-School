"use client";

import Image, { ImageProps } from "next/image";
import { useEffect, useState } from "react";

interface DynamicImageProps extends Omit<ImageProps, "src"> {
  sectionId: string;
  defaultSrc: string;
}

// Global cache to avoid multiple fetches on the same page load
let globalImageMap: Record<string, string> | null = null;
let isFetching = false;
const listeners: Array<(map: Record<string, string>) => void> = [];

export default function DynamicImage({ sectionId, defaultSrc, ...props }: DynamicImageProps) {
  const [src, setSrc] = useState<string>(defaultSrc);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImageMap = async () => {
      if (globalImageMap) {
        setSrc(globalImageMap[sectionId] || defaultSrc);
        setLoading(false);
        return;
      }

      if (isFetching) {
        listeners.push((map) => {
          setSrc(map[sectionId] || defaultSrc);
          setLoading(false);
        });
        return;
      }

      isFetching = true;
      try {
        const response = await fetch("/api/media");
        const result = await response.json();
        if (result.success) {
          globalImageMap = result.data;
          setSrc(globalImageMap![sectionId] || defaultSrc);
          listeners.forEach((l) => l(globalImageMap!));
        }
      } catch (error) {
        console.error("Failed to fetch dynamic images:", error);
      } finally {
        isFetching = false;
        setLoading(false);
      }
    };

    fetchImageMap();
  }, [sectionId, defaultSrc]);

  return (
    <Image
      {...props}
      src={src}
      className={`${props.className || ""} ${loading ? "opacity-0" : "opacity-100"} transition-opacity duration-500`}
    />
  );
}
