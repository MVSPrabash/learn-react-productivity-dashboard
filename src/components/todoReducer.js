export function todoReducer(state, action) {
  switch (action.type) {
    case "add":
      return [
        ...state,
        {
          id: Date.now(),
          text: action.text,
          done: false
        },
      ];

    case "toggle":
      return state.map(todo =>
        todo.id === action.id ? {...todo, done: !todo.done} : todo
      );

    case "remove":
      return state.filter(item => item.id !== action.id);

    default:
      return state;
  }
}
