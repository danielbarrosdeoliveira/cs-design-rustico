export const metadata = {
  title: "Carlos Silva | Design Rústico",
  description:
    "A empresa CS Designer Rústico atua no mercado de pedras naturais desde 2014. Realizamos trabalho de revestimentos, escadas, cascatas, muros, calçamentos, grutas e lagos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="overflow-x-hidden">
        {children}

        <link
          rel="stylesheet"
          href="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-button.css"
        />
        <a
          id="robbu-whatsapp-button"
          target="_blank"
          href="https://api.whatsapp.com/send?phone=5511974939863&text=Ol%C3%A1%20gostaria%20de%20realizar%20um%20or%C3%A7amento..."
        >
          <div className="rwb-tooltip">Realizar orçamento</div>
          <img src="https://cdn.positus.global/production/resources/robbu/whatsapp-button/whatsapp-icon.svg" />
        </a>
      </body>
    </html>
  );
}
