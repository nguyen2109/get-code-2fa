import "./../styles/global.css";

export const metadata = {
  title: "Github API User",
  description: "Github API User",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>

        <main className="appx">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
