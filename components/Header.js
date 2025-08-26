// components/Header.js
import Link from 'next/link';
import Image from 'next/image'; // Usamos el componente optimizado de Next.js
import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      {/* Izquierda: Logo Institucional */}
      <div className={styles.brand}>
        {/* Usamos un placeholder temporal para el logo. Reemplazar con el logo final. */}
        <Image 
          src="https://i.ibb.co/fY3GNy6/logo-mtps-completo.webp" 
          alt="Logo Ministerio de Trabajo" 
          width={150} 
          height={45}
          priority // Prioriza la carga del logo
        />
      </div>

      {/* Centro: Navegación Principal */}
      <nav className={styles.mainNav}>
        <Link href="/bienestar-corporativo">Bienestar Corporativo</Link>
        <Link href="/gestion-riesgos">Gestión de Riesgo SSO</Link>
        <Link href="/peritajes">Peritaje y Consultores</Link>
      </nav>
      
      {/* Derecha: Llamada a la Acción */}
      <div className={styles.actions}>
        <Link href="/contacto" className={styles.ctaButton}>
          Agendar Consultoría
        </Link>
      </div>
    </header>
  );
};

export default Header;