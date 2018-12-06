import Redux from 'redux';
import axios from 'axios';

const initialState = [];

// Action Types
const GOT_ALL_CAMPUSES = 'GOT_ALL_CAMPUSES';
const SHOW_ONE_CAMPUS = 'SHOW_ONE_CAMPUS';
const ADDED_CAMPUS = 'ADDED_CAMPUS';
const FETCH_ALL_CAMPUSES = 'FETCH_ALL_CAMPUSES';

// Action Creators
export const gotAllCampuses = (campuses) => {
  return {
    type: GOT_ALL_CAMPUSES,
    campuses
  }
}

export const showOneCampus = campus => {
  return {
    type: SHOW_ONE_CAMPUS,
    campus
  }
}

// Thunk Creators
export const fetchAllCampuses = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/campuses');
      dispatch(gotAllCampuses(data));
    } catch (err) {
      console.error(err);
    }
  }
}

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    try {
      console.log('in fetchSingleCampus');
      const { data } = await axios.get(`/api/campuses/${id}`);
      dispatch(showOneCampus(data));
    } catch (err) {
      console.error(err);
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_CAMPUSES:
      return [...action.campuses];
    case SHOW_ONE_CAMPUS:
      return [action.campus];
    default:
      return state;
  }
}

export default reducer;
