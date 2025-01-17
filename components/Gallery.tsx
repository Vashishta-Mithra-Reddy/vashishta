'use client'

import React, { useEffect, useState } from 'react';
import { getGalleryImages } from '../utils/getGalleryImages';

interface ImageDimensions {
  url: string;
  width: number;
  height: number;
}

const Gallery = ({ bucketName }: { bucketName: string }) => {
  const [images, setImages] = useState<ImageDimensions[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await getGalleryImages(bucketName);
      
      const imagesWithDimensions = await Promise.all(
        urls.map(async (url) => {
          return new Promise<ImageDimensions>((resolve) => {
            const img = new Image();
            img.onload = () => {
              resolve({
                url,
                width: img.width,
                height: img.height
              });
            };
            img.src = url;
          });
        })
      );
      
      setImages(imagesWithDimensions);
      setLoading(false);
    };

    fetchImages();
  }, [bucketName]);

  if (loading) {
    return <div className="text-center py-10">Loading images...</div>;
  }

  if (images.length === 0) {
    return <div className="text-center py-10">No images found.</div>;
  }

  return (
    <div className="container px-6 mx-auto w-full">
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-5 gap-10 space-y-10">
        {images.map((image, index) => {
          const aspectRatio = (image.height / image.width) * 100;
          
          return (
            <div key={index} className="break-inside-avoid">
              <div 
                className="w-full relative overflow-hidden"
                style={{ paddingBottom: `${aspectRatio}%` }}
              >
                <img
                  src={image.url}
                  alt={`Gallery image ${index + 1}`}
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;

