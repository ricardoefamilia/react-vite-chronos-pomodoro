import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { CycleType } from "../../models/CycleType";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";

export function Tips() {
  const { state } = useTaskContext();
  
  // ciclos
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  // Tips
  const tipsForWhenActiveTask= {
    [CycleType.WORK]: <span>Foque por <b>{state.config.workTime}</b> min.</span>,
    [CycleType.SHORT_BREAK]: <span>Descanse por <b>{state.config.shortBreakTime}</b> min.</span>,
    [CycleType.LONG_BREAK]: <span>Descanso longo.</span>,
  };

  const tipsForNoActiveTask= {
    [CycleType.WORK]: <span>Próximo ciclo é de <b>{state.config.workTime}</b> min.</span>,
    [CycleType.SHORT_BREAK]: <span>Próximo descanso é de <b>{state.config.shortBreakTime}</b> min.</span>,
    [CycleType.LONG_BREAK]: <span>Próximo descanso será longo.</span>,
  };
  
  return (
    <>
      {!!state.activeTask && tipsForWhenActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}

    </>
  );
}