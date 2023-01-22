const initialState = {
  scrollNo: 0,
};

export const reducer = (state = initialState, actions) => {
  if (actions.type === "CHANGENO") {
    return {
      scrollNo: actions.payload,
    };
  }

  return state;
};
