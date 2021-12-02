export declare type State = Record<string, any>;
export declare type Mutation = (state: State) => void;
export declare type Mutations = Record<string, Mutation>;
export declare type Store = {
    state: State;
    mutations?: Mutations;
};
export declare type Stores = Record<string, Store>;
