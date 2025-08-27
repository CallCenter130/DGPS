// pages/_app.js
import '../styles/globals.css';
import Header from '../components/Header'; // Asegúrate de que -- esta línea exista

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header /> {/* Y que el componente Header se muestre aquí: */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;