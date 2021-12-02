import { App } from 'vue';
import { Stores } from './types';

export const keyCuex = Symbol('CUEX');
export const Cuex = (stores: Stores) => {
  return {
    stores,
    install(app: App) {
      app.provide(keyCuex, stores);
    },
  };
};
