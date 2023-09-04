import { environment } from '@environments/environment';

export const log = (tag = '', message = ''): void => {
  if (!environment.production) {
    console.log(`-------- [${tag}] ${message} -------- | ${new Date().toLocaleTimeString()}`);
  }
};
