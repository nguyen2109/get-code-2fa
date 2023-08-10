import "./../styles/global.css";
import Providers from "./Providers";
export const metadata = {
  title: "Get 2FA Code",
  description: "Get 2FA Code",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="app">
          <Providers>{children} </Providers>
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
