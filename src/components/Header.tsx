import Image from "next/image";

export const Header = () => {
  return (
    <header className="bg-[#333]">
      <div className="container mx-auto sm:px-6">
        <nav className="container flex justify-between h-16 items-center">
          <a href="/">
            <Image
              src="/images/logo-cs-rustico.png"
              alt="Logo Carlos Silva Design Rústico"
              width={90}
              height={60}
            />
          </a>
          <ul className="flex">
            <li>
              <a
                className="px-2 font-semibold text-white uppercase transition-all duration-150 ease-linear hover:text-[#d18448]"
                href="#"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                className="px-2 font-semibold text-white uppercase transition-all duration-150 ease-linear hover:text-[#d18448]"
                href="#"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                className="px-2 font-semibold text-white uppercase transition-all duration-150 ease-linear hover:text-[#d18448]"
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
