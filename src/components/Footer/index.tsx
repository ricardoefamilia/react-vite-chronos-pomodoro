import { Link } from 'react-router';
import styles from './style.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to='/about-pomodoro/'>Entenda como funciona a técnica pomodoro 🍅</Link>
      <Link to='/'>
        Chronos Pomodoro &copy; {new Date().getFullYear()} - by RLA 💪
      </Link>
    </footer>
  );
}
