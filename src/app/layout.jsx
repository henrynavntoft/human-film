import "./globals.css";
import Header from "./components/Header";

export const metadata = {
  title: "Human Film",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/human.favicon.svg" sizes="any" />
        <link
          rel="stylesheet"
          href="https://use.typekit.net/jrh2pge.css"
        ></link>
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
