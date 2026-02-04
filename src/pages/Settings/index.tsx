import { MainTemplate } from '../../templates/MainTemplates';
import { Container } from '../../components/Container';
import { Heading } from '../../components/Heading';
import { DefaultInput } from '../../components/DefaultInput';
import styles from '../../components/MainForm/style.module.css';
import { DefaultButton } from '../../components/DefaultButton';
import { SaveIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { showMessage } from '../../adapters/showMessage';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';

export function Settings() {
  useEffect(() => {
    document.title = 'Configurações | Chronos Pomodoro';
  }, []);
  
  const { state, dispatch } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    showMessage.dismiss();

    const formErrors: string[] = [];

    // Lógica para salvar as configurações
    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);

    // validando os inputs
    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push('Digite apenas números para TODOS os campos.');
      return
    }

    if(workTime < 1 || workTime > 99) {
      formErrors.push('Digite valores entre 1 e 99 para foco.');
    }

    if(shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push('Digite valores entre 1 e 30 para descanso curto.');
    }

    if(longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push('Digite valores entre 1 e 60 para descanso longo.');
    }

    if(formErrors.length > 0) {
      formErrors.forEach(error => showMessage.error(error));
      return;
    }

    dispatch({
      type: TaskActionTypes.CHANGE_SETTINGS,
      payload: {
        workTime,
        shortBreakTime,
        longBreakTime,
      },
    });

    // outra forma de validar os inputs
    // if(isNaN(workTime) || workTime <= 0) {
    //   showMessage.error('O tempo de foco deve ser um número positivo.');
    //   return;
    // }
    // if(isNaN(shortBreakTime) || shortBreakTime <= 0) {
    //   showMessage.error('O tempo de descanso curto deve ser um número positivo.');
    //   return;
    // }
    // if(isNaN(longBreakTime) || longBreakTime <= 0) {
    //   showMessage.error('O tempo de descanso longo deve ser um número positivo.');
    //   return;
    // }

    // Aqui você pode adicionar a lógica para salvar as configurações, como atualizar o estado global ou localStorage
    showMessage.success('Configurações salvas com sucesso!');
  }
  return (
    <>
      <MainTemplate>
        <Container>
          <Heading>Configurações</Heading>
        </Container>
        <Container>
          <p style={{ textAlign: 'center' }}>
            Modifique as configurações para tempo de foco, descanso curto e descanso longo.
          </p>
        </Container>
        <Container>
          <form onSubmit={handleSaveSettings} action="" className={styles.form}>
            <div className={styles.formRow}>
              <DefaultInput 
                id='workTime' 
                labelText='Foco' 
                ref={workTimeInput} 
                defaultValue={state.config.workTime} 
                type='number'/>
            </div>
            <div className={styles.formRow}>
              <DefaultInput 
                id='shortBreakTime' 
                labelText='Descanso Curto' 
                ref={shortBreakTimeInput} 
                defaultValue={state.config.shortBreakTime} 
                type='number'/>
            </div>
            <div className={styles.formRow}>
              <DefaultInput 
                id='longBreakTime' 
                labelText='Descanso Longo' 
                ref={longBreakTimeInput} 
                defaultValue={state.config.longBreakTime} 
                type='number'/>
            </div>
            <div className={styles.formRow}>
              <DefaultButton icon={<SaveIcon />} aria-label='Salvar configurações' title='Salvar configurações' />
            </div>
          </form>
        </Container>
      </MainTemplate>
    </>
  );
}
