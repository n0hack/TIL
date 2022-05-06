function visible(state = 'ALL', action) {
  switch (action.type) {
    case 'SET_VISIBLE':
      return action.flag;
    default:
      return state;
  }
}

export default visible;
