import { CycleType } from "../models/CycleType";
import type { TaskModel } from "../models/TaskModel";

export function getNextCycleType(currentCycle: number): TaskModel['type'] {
  if (currentCycle % 8 === 0) return CycleType.LONG_BREAK;
  if (currentCycle % 2 === 0) return CycleType.SHORT_BREAK;
  return CycleType.WORK;
}