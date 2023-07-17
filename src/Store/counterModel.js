import { action, createStore, persist } from 'easy-peasy';

const counterModel = {
  count: 0,
  increment: action((state) => {
    state.count++;
  }),
  decrement: action((state) => {
    state.count--
  }),
};

// Create the counter store
const counterStore = createStore(persist(counterModel, {
  storage: 'localStorage',
  // key: 'counter',
}));

export default counterModel;