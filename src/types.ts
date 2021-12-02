export type State = Record<string, any>;
export type Mutation = (state: State) => void;
export type Mutations = Record<string, Mutation>;

export type Store = {
  state: State,
  mutations?: Mutations,
};

export type Stores = Record<string, Store>;
