import { ADD_TO_FAVOURITES, GET_JOBS, REMOVE_FROM_FAVOURITE } from "../actions";

const initialState = {
  favourites: {
    content: []
  },
  jobs: {
    content: []
  }
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_FAVOURITES:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: [...state.favourites.content, action.payload]
        }
      };
    case REMOVE_FROM_FAVOURITE:
      return {
        ...state,
        favourites: {
          ...state.favourites,
          content: state.favourites.content.filter((favCompany) => favCompany !== action.payload)
        }
      };
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

export default mainReducer;
