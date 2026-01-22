import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './style.module.css';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
  // const [taskName, setTaskName] = useState(''); // (input controlado) se quiser renderizar cada contexto durante o preenchimento do formulário.
  const { state, setState } = useTaskContext();
  const taskNameInput = useRef<HTMLInputElement>(null); // input não controlado

  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle); // newTask.type

  function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Não envia o formulário.
    // console.log('Ref:', taskNameInput);
    // console.log('Current: ', taskNameInput.current);
    // console.log('Value:', taskNameInput.current?.value);
    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();
    // console.log('Passou aqui também: ' + taskName);
    if (!taskName) {
      alert('Digite o nome da tarefa.');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: state.config[nextCycleType],
      type: nextCycleType,
    };

    const secondsRemaining = newTask.duration * 60;

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, // Conferir...
        formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
        tasks: [...prevState.tasks, newTask],
      };
    });
  }
  return (
    <form onSubmit={handleCreateNewTask} className={styles.form} action=''>
      <div className={styles.formRow}>
        {/* <DefaultInput
          type='text'
          id='meuInput'
          placeHolder='Digite algo...'
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
        /> */}
        <DefaultInput
          type='text'
          id='meuInput'
          placeHolder='Digite algo...'
          ref={taskNameInput}
        />
      </div>

      <div className={styles.formRow}>
        <p>Próximo intervalo é de 25min</p>
      </div>

      <div className={styles.formRow}>
        <Cycles />
      </div>

      <div className={styles.formRow}>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
        {/* <DefaultButton icon={<StopCircleIcon />} color='red' /> */}
      </div>
    </form>
  );
}
