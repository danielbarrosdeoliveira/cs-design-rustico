export const About = () => {
  return (
    <section id="about" className="w-screen h-auto py-12 container mx-auto">
      <h2 className="text-center text-3xl uppercase font-bold">Quem Somos?</h2>

      <div className="gap-6 mt-8 items-center w-full flex">
        <div className="w-full text-center">
          <p className="text-lg w-4/5">
            A empresa CS Designer Rústico atua no mercado de pedras naturais
            desde 2014, somos reconhecidos por exercer um trabalho de qualidade
            e excelência em nossos serviços.
            <br />
            Estamos situados em Atibaia-SP atendemos vários estados e cidades.
            <br />
            Trabalhamos com vários modelos de pedras naturais sendo Pedra Ferro,
            pedra moledo, San tomé, mosaico português...
            <br />
            Realizamos trabalho de revestimentos, escadas, cascatas, muros,
            calçamentos, grutas e lagos.
          </p>
        </div>

        <div className="w-full text-center flex justify-center items-start gap-2">
          <div>
            <h3 className="text-1xl font-bold uppercase">Missão</h3>
            <p className="text-lg">
              Apresentar constantemente ao mercado de construção, reforma e
              paisagismos soluções criativas e inovadoras, agregar valor as
              obras de nossos clientes através de pedras naturais.
            </p>
          </div>

          <div>
            <h3 className="text-1xl font-bold uppercase mt-4">Visão</h3>
            <p className="text-lg">
              Ser líder no segmento de pedras e reconhecido pela excelência em
              nossos serviços e nas relações comerciais com nossos clientes e
              parceiros.
            </p>
          </div>

          <div>
            <h3 className="text-1xl font-bold uppercase mt-4">Valor</h3>
            <p className="text-lg">
              Comprometimento, Inovação, Integridade, respeito, confiança e
              qualidade em nossos serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
