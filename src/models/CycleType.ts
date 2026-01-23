export const CycleType = {
  WORK: 'workTime',
  SHORT_BREAK: 'shortBreakTime',
  LONG_BREAK: 'longBreakTime',
} as const;

export type CycleType = typeof CycleType[keyof typeof CycleType];
