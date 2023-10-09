import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-[#d18448]">
      <div className="container mx-auto">
        <nav className="container flex justify-between h-16 items-center ">
          {/* <Image src="" alt="Logo Carlos Silva Design Rústico" /> */}
          <p className="text-white text-2xl">CS Design Rústico</p>
          <ul className="flex">
            <li>
              <a
                className="px-2 font-semibold text-white uppercase transition-all duration-300 ease-linear hover:text-black"
                href="#"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                className="px-2 font-semibold text-white uppercase transition-all duration-300 ease-linear hover:text-black"
                href="#"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="px-2 font-semibold text-white uppercase transition-all duration-300 ease-linear hover:text-black"
                href="#"
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
