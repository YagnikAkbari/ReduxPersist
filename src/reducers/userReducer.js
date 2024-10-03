export const userReducer = (
  state = { username: "YAGNIK", status: "CLOSED" },
  action
) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
