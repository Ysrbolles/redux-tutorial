const hassan = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + action.counter;
    case "DEC":
      return state - action.counter;
    default:
      return state;
  }
};

export default hassan