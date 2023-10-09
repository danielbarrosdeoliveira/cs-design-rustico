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
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}
