const { combineReducers } = require("redux");
const { default: todoReducer } = require("./todoReducer");
const rootReducer = combineReducers({
  todo: todoReducer,
});
export default rootReducer;
