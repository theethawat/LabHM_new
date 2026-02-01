"use client";
import ImageGallery from "react-image-gallery";
import _ from "lodash";

export default function Gallery({ images }: { images?: string[] }) {
  return (
    <div className="p-4 flex justify-center">
      <div style={{ maxWidth: 600 }}>
        <ImageGallery
          items={_.map(images, (each, index: number) => ({
            original: each,
            thumbnail: each,
            key: index,
            size: "tiny", // smaller thumbnails
          }))}
        />
      </div>
    </div>
  );
}
