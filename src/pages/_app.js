// pages/_app.js
import '../app/globals.css'; // Path to your global CSS file

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
