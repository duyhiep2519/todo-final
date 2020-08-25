const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              id: action.id,
              title: action.title,
              category: action.category,
              deadLine: action.deadLine,
              isComplete: action.isComplete,
              edit: false,
            }
          : todo
      );

    case "SET_EDIT_TODO":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              id: action.id,
              title: action.title,
              category: action.category,
              deadLine: action.deadLine,
              isComplete: action.isComplete,
              edit: true,
            }
          : todo
      );
    case "ADD":
      return [
        ...state,
        {
          id: action.id,
          category: action.category,
          title: action.title,
          isComplete: action.isComplete,
          deadLine: action.deadLine,
          edit: action.edit,
        },
      ];
    case "CLEAR":
      return (state = []);
    case "DELETE":
      return state.filter((todo) => todo.id !== action.id);
    case "TOGGLE_COMPLETE":
      return state.map((todo) =>
        todo.id === action.id
          ? {
              id: action.id,
              category: action.category,
              title: todo.title,
              isComplete: !todo.isComplete,
              deadLine: todo.deadLine,
            }
          : todo
      );
    default:
      return state;
  }
};
export default todoReducer;
