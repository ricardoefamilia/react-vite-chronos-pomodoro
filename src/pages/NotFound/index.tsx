import { Container } from '../../components/Container';
import { MainTemplate } from '../../templates/MainTemplates';

export function NotFound() {
  return (
    <MainTemplate>
      <Container>
        <h1>Página não encontrada!</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. In provident
          nisi necessitatibus laboriosam excepturi odit, labore rerum alias
          veniam. Dolorem veniam tenetur consectetur, reiciendis quidem tempore
          tempora repellat harum excepturi.
        </p>
      </Container>
    </MainTemplate>
  );
}
