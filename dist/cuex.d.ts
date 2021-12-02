import { App } from 'vue';
import { Stores } from './types';
export declare const keyCuex: unique symbol;
export declare const Cuex: (stores: Stores) => {
    stores: Stores;
    install(app: App): void;
};
