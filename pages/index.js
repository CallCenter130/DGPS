import Head from 'next/head';
import Hero from '../components/Hero';
// Importaremos más componentes aquí a medida que los construyamos
// import PropuestaDeValor from '../components/PropuestaDeValor';

export default function Home() {
  return (
    <div>
      <Head>
        {/* Esto es crucial para el SEO (Posicionamiento en buscadores) */}
        <title>DGPS | Asesoría Estratégica en Previsión Social</title>
        <meta name="description" content="Soluciones de alto nivel en riesgo psicosocial, SSO y peritajes para empresas líderes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Aquí insertamos nuestro primer componente */}
        <Hero />

        {/* Aquí irán las demás secciones que construiremos */}
        {/* <PropuestaDeValor /> */}
        {/* <SolucionesClave /> */}

      </main>
    </div>
  );
}