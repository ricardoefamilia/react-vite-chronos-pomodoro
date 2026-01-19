import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import { Menu } from './components/Menu';
import { CountDown } from './components/CountDown';
import { Form } from './components/Form';
import { Footer } from './components/Footer';

export function App() {
  return (
    <>
      <Container>
        <Logo />
        <Menu />
        <CountDown />
        <Form />
        <Footer />
      </Container>
    </>
  );
}
