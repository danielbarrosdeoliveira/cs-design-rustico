export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center h-24 bg-[#d18448] mt-12 px-8 text-center">
      <p className="text-white">
        copyright &copy; CS Designer Rústico - Todos os Direitos Reservados
      </p>
      <p className="text-white">
        Desenvolvido por{" "}
        <a
          href="https://vianait.com.br"
          target="_blank"
          className="transition-all duration-150 ease-linear hover:text-black"
        >
          Viana IT
        </a>
      </p>
    </footer>
  );
};
