import styles from '../styles/Home.module.css';

// Un componente es una pieza de UI independiente y reutilizable.
const Hero = () => {
  return (
    // Usamos 'className' para aplicar nuestros estilos modulares.
    <section className={styles.heroSection}>
      {/* Este div será reemplazado por el componente de video de fondo */}
      <div className={styles.videoBackground}></div>
      
      <div className={styles.heroContent}>
        <h1>Asegurando el Activo más Valioso: su Gente y su Legado.</h1>
        <p>
          Asesoría estratégica en Previsión Social para líderes que buscan proteger
          el futuro de su organización y su patrimonio.
        </p>
        <a href="#soluciones" className={styles.ctaButton}>
          Descubrir Soluciones
        </a>
      </div>
    </section>
  );
};

export default Hero;