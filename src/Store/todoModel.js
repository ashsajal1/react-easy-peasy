import { action, createStore, persist} from 'easy-peasy';

const todoModel = {
    todos: [],
    addTodo: action((state, payload) => {
        state.todos.push(payload);
    }),
};

// Create the user store
const todoStore = createStore(persist(todoModel, {
    storage: 'localStorage',
    // key: 'todos',
}));

export default todoModel;