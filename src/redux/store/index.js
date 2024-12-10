import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers";
import jobsReducer from "../reducers/jobsReducer";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  favourites: mainReducer
});

const store = configureStore({
  reducer: rootReducer
});

export default store;
