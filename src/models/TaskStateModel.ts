import type { CycleType } from "./CycleType";
import type { TaskModel } from "./TaskModel"

// Estado -> Componente -> Filhos

export type TaskStateModel = {
  tasks: TaskModel[]; // Histórico, MainForm
  secondsRemaining: number; // CountDown, Histórico,MainForm, Button
  formattedSecondsRemaining: string; // Título, CountDown
  activeTask: TaskModel | null; // CountDown, Histórico, MainForm, Button
  currentCycle: number; // 1 a 8 - Home, 
  config: {
    [CycleType.WORK]: number; // MainForm
    [CycleType.SHORT_BREAK]: number; // MainForm
    [CycleType.LONG_BREAK]: number; // MainForm
  };
};