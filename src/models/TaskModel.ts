import type { CycleType } from './CycleType';

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number;
  completeDate: number | null; // qdo o timer chega ao final
  interruptDate: number | null; // qdo a task for interrompida
  type: CycleType;
};
