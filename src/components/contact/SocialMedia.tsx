import Image from "next/image";
import InstagramIcon from "../../../public/icons/instagram.png";

export const SocialMedia = () => {
  return (
    <>
      <h2 className="text-center uppercase text-lg font-bold">Redes Sociais</h2>

      <div className="mx-auto flex justify-center mt-8">
        <a
          href="https://instagram.com/carlos.designerrustico?igshid=OGQ5ZDc2ODk2ZA=="
          title="instagram"
          target="_blank"
        >
          <Image
            src={InstagramIcon}
            alt="Instagram CS Designer Rústico"
            width={64}
            quality={100}
          />
        </a>

        <a href="http://">
          <img src="" alt="" />
        </a>
      </div>
    </>
  );
};
