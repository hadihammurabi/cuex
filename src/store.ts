import { reactive, readonly, inject } from 'vue';
import { Store, Stores, State } from './types';
import { keyCuex } from './cuex';

export const createStore = (options: Store): Store => {
  const state = reactive(options.state as typeof options.state);
  const mutations: {
    [key: string]: (state: State) => void;
  } = {};
  Object.keys(options.mutations as {}).forEach((key) => {
    mutations[key] = () => options.mutations![key](state);
  });
  return {
    state: readonly(state),
    mutations,
  };
};

export const useStore = () => {
  return inject(keyCuex) as Stores ?? {};
};
