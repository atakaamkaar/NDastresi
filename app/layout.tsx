import "./styles/Main.css";
import "./styles/stylesheet.css";


export const metadata = {
  title: "Dastresi.ir",
  description: "Tooraj Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa">
      <body>{children}</body>
    </html>
  );
}
