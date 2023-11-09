import "./global.css";


export const metadata = {
  title: "Serena",
  description: "Serena Green GSI",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}

      </body>
    </html>
  );
}
