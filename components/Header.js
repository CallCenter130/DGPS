// components/Header.js -- VERSIÓN CON ESTADO ACTIVO

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router'; // <-- 1. Importa el useRouter
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter(); // <-- 2. Inicializa el hook

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.brand}>
        <Link href="/" className={styles.brandLink}>
          <Image 
            src="https://i.ibb.co/fY3GNy6/logo-mtps-completo.webp" 
            alt="Logo Ministerio de Trabajo" 
            width={150} 
            height={45}
            priority
          />
          <span className={styles.brandName}>DGPS</span>
        </Link>
      </div>

      <nav className={styles.mainNav}>
        {/* 3. Lógica para aplicar la clase activa */}
        <Link 
          href="/bienestar-corporativo" 
          className={router.pathname == "/bienestar-corporativo" ? styles.activeLink : ""}
        >
          Bienestar Corporativo
        </Link>
        <Link 
          href="/gestion-riesgos"
          className={router.pathname == "/gestion-riesgos" ? styles.activeLink : ""}
        >
          Gestión de Riesgo SSO
        </Link>
        <Link 
          href="/peritajes"
          className={router.pathname == "/peritajes" ? styles.activeLink : ""}
        >
          Peritaje y Consultores
        </Link>
      </nav>
      
      <div className={styles.actions}>
        <Link href="/contacto" className={styles.ctaButton}>
          Agendar Consultoría
        </Link>
      </div>
    </header>
  );
};

export default Header;