import { GET_JOBS } from "../actions";

const initialState = {
  jobs: {
    content: []
  }
};

const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: {
          ...state.jobs,
          content: action.payload
        }
      };

    default:
      return state;
  }
};
export default jobsReducer;
