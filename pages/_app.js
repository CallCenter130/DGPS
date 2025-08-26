// pages/_app.js

// 1. Importa los estilos globales que afectarán a todo el sitio.
import '../styles/globals.css';

// 2. Este es el componente principal de la App.
//    Recibe el 'Component' (la página actual, ej: index.js) y sus 'pageProps'.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// 3. (LA LÍNEA CLAVE) Exporta el componente por defecto.
//    Esto es lo que el error decía que faltaba.
export default MyApp;