/* eslint-disable no-unused-vars */
export const DEBOUNCE_DELAY_TIME = 200;

type TimerType = ReturnType<typeof setTimeout>;

export const debounce = <T extends unknown[]>(
  func: (...args: T) => unknown,
  timeout = DEBOUNCE_DELAY_TIME
) => {
  let timer: TimerType | undefined = undefined;
  return (...args: T) => {
    clearTimeout(timer as TimerType);
    timer = setTimeout(() => {
      func(...args);
    }, timeout);
  };
};
