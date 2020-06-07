const initialState = {
  quickStats: {
    isLoading: false,
    data: {
      postCount: null,
      mediaCount: null,
      orderCount: null,
    }
  },
  activity: {
    isLoading: false,
    data: []
  }
};

function dashboard(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

export default dashboard;
