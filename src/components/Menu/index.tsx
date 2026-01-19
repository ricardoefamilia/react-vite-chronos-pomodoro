import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './style.module.css';

export function Menu() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <nav className={styles.menu}>
      <a
        href='/'
        className={styles.menuLink}
        aria-label='Ir para a Home'
        title='Ir para a Home'
      >
        <HouseIcon />
      </a>
      <a
        href='/'
        className={styles.menuLink}
        aria-label='Ver Histórico'
        title='Ver Histórico'
      >
        <HistoryIcon />
      </a>
      <a
        href='/'
        className={styles.menuLink}
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        href='/'
        className={styles.menuLink}
        aria-label='Mudar Tema'
        title='Mudar Tema'
      >
        <SunIcon />
      </a>
    </nav>
  );
}
