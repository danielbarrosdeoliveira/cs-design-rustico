import Image from "next/image";

const images = [
  "/images/trabalhos/10.jpg",
  "/images/trabalhos/01.jpg",
  "/images/trabalhos/02.jpg",
  "/images/trabalhos/11.jpg",
  "/images/trabalhos/03.jpg",
  "/images/trabalhos/12.jpg",
  "/images/trabalhos/13.jpg",
  "/images/trabalhos/04.jpg",
  "/images/trabalhos/05.jpg",
  "/images/trabalhos/14.jpg",
  "/images/trabalhos/06.jpg",
  "/images/trabalhos/07.jpg",
  "/images/trabalhos/08.jpg",
  "/images/trabalhos/15.jpg",
  "/images/trabalhos/09.jpg",
  "/images/trabalhos/16.jpg",
];

export const ImageGallery = () => {
  return (
    <div className="container mx-auto grid grid-cols-4 grid-rows-6 gap-4">
      <div className="row-span-2">
        <img src="/images/trabalhos/10.jpg" alt="" className="rounded-lg" />
      </div>
      <div>
        <img
          src="/images/trabalhos/01.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div>
        <img
          src="/images/trabalhos/02.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div className="col-start-2 row-start-2">
        <img
          src="/images/trabalhos/03.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div className="col-start-3 row-start-2">
        <img
          src="/images/trabalhos/04.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div className="row-span-2 col-start-4 row-start-1">
        <img src="/images/trabalhos/11.jpg" alt="" className="rounded-lg" />
      </div>
      <div className="row-start-3">
        <img
          src="/images/trabalhos/05.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div className="row-span-2 row-start-3">
        <img src="/images/trabalhos/12.jpg" alt="" className="rounded-lg" />
      </div>
      <div className="row-span-2 row-start-3">
        <img src="/images/trabalhos/13.jpg" alt="" className="rounded-lg" />
      </div>
      <div className="row-start-3">
        <img
          src="/images/trabalhos/06.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div className="row-start-4">
        <img
          src="/images/trabalhos/07.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div className="col-start-4 row-start-4">
        <img
          src="/images/trabalhos/08.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
      <div className="row-span-2 row-start-5">
        <img src="/images/trabalhos/14.jpg" alt="" className="rounded-lg" />
      </div>

      <div className="row-span-2 row-start-5">
        <img src="/images/trabalhos/10.jpg" alt="" className="rounded-lg" />
      </div>
      <div className="row-span-2 row-start-5">
        <img src="/images/trabalhos/16.jpg" alt="" className="rounded-lg" />
      </div>
      <div className="row-start-5">
        <img
          src="/images/trabalhos/09.jpg"
          alt=""
          className="rounded-lg h-full"
        />
      </div>
    </div>
  );
};
