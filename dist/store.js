import { reactive, readonly, inject } from 'vue';
import { keyCuex } from './cuex';
export const createStore = (options) => {
    const state = reactive(options.state);
    const mutations = {};
    Object.keys(options.mutations).forEach((key) => {
        mutations[key] = () => options.mutations[key](state);
    });
    return {
        state: readonly(state),
        mutations,
    };
};
export const useStore = () => {
    return inject(keyCuex) ?? {};
};
//# sourceMappingURL=store.js.map