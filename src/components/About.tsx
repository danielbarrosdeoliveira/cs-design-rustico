export const About = () => {
  return (
    <section id="about" className="py-12 container mx-auto">
      <div className="w-full flex gap-4 items-center justify-center">
        <div className="w-full flex flex-col items-center">
          <h2 className="text-3xl uppercase font-bold">Quem Somos?</h2>
          <p className="text-lg text-center leading-8 mt-8">
            A empresa CS Designer Rústico atua no mercado de pedras naturais
            desde 2014, somos reconhecidos por exercer um trabalho de qualidade
            e excelência em nossos serviços. Estamos situados em Atibaia-SP
            atendemos vários estados e cidades. Trabalhamos com vários modelos
            de pedras naturais sendo Pedra Ferro, pedra moledo, San tomé,
            mosaico português... Realizamos trabalho de revestimentos, escadas,
            cascatas, muros, calçamentos, grutas e lagos.
          </p>
        </div>

        <div className="w-full hidden lg:block">
          <img
            src="https://images.unsplash.com/photo-1533239111758-7d9b96218c55?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>

      <div className="w-full flex flex-col text-center justify-center items-start gap-9 mt-9 lg:flex-row">
        <div className="w-full">
          <h3 className="text-2xl font-bold uppercase">Missão</h3>
          <p className="text-lg">
            Apresentar constantemente ao mercado de construção, reforma e
            paisagismos soluções criativas e inovadoras, agregar valor as obras
            de nossos clientes através de pedras naturais.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold uppercase mt-4">Visão</h3>
          <p className="text-lg">
            Ser líder no segmento de pedras e reconhecido pela excelência em
            nossos serviços e nas relações comerciais com nossos clientes e
            parceiros.
          </p>
        </div>
        <div className="w-full">
          <h3 className="text-2xl font-bold uppercase mt-4">Valor</h3>
          <p className="text-lg">
            Comprometimento, Inovação, Integridade, respeito, confiança e
            qualidade em nossos serviços.
          </p>
        </div>
      </div>
    </section>
  );
};
