import Image from "next/image";

export const Header = () => {
  return (
    <header className="container mx-auto">
      <nav className="flex justify-between h-16 items-center bg-">
        <Image src="" alt="Logo Carlos Silva Design Rústico" />
        <ul className="flex">
          <li>
            <a className="px-2" href="#">
              Serviços
            </a>
          </li>
          <li>
            <a className="px-2" href="#">
              Sobre
            </a>
          </li>
          <li>
            <a className="px-2" href="#">
              Contato
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
