export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITE = "REMOVE_FROM_FAVOURITE";
export const GET_JOBS = "GET_JOBS";

export const addToFavouritesAction = (companyName) => ({ type: ADD_TO_FAVOURITES, payload: companyName });
export const removeFromFavourites = (company) => ({ type: REMOVE_FROM_FAVOURITE, payload: company });

export const getJobsAction = (baseEndpoint, query) => {
  return async (dispatch) => {
    try {
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};
