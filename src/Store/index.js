import { createStore, persist } from 'easy-peasy';
import todoModel from './todoModel';
import counterModel from './counterModel';

// Combine the stores into a single store
const store = createStore({
    counterModel: persist(counterModel, {
        storage: 'localStorage',
        // key: 'counter',
    }),
    todoModel: persist(todoModel, {
        storage: 'localStorage',
        // key: 'counter',
    }),
});

// Export the combined store
export default store;