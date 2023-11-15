import Image from "next/image";

type Props = {
  images: string[];
};

export const ImageGallery = ({ images }: Props) => {
  return (
    <section className="image-gallery" id="services">
      <ul className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {images.map((image, index) => (
          <li key={index}>
            <Image
              src={image}
              alt={`Image ${index + 1}`}
              width={250}
              height={250}
              className="object-cover w-full h-full rounded-lg"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-gray-800 rounded-lg px-2 py-1">
                Ver
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
