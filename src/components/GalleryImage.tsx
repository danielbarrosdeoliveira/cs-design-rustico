"use client";

import Gallery from "react-photo-gallery";
import { photos, photos2 } from "@/utils/photos";

export const GalleryImage = () => {
  return (
    <div className="container mx-auto px-2 sm:px-0 mt-16">
      <Gallery photos={photos} direction={"row"} margin={8} columns={4} />
      <Gallery photos={photos2} direction={"row"} margin={8} />
    </div>
  );
};
