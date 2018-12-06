import Redux from 'redux';
import axios from 'axios';

const initialState = [];

// Action Types
const GOT_ALL_CAMPUSES = 'GOT_ALL_CAMPUSES';
const SHOW_ONE_CAMPUS = 'SHOW_ONE_CAMPUS';
const ADDED_CAMPUS = 'ADDED_CAMPUS';
const REMOVED_CAMPUS = 'REMOVED_CAMPUS';

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

export const addedCampus = (campuses) => {
  return {
    type: ADDED_CAMPUS,
    campus
  }
}

export const removedCampus = (id) => {
  return {
    type: REMOVED_CAMPUS,
    id
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
      const { data } = await axios.get(`/api/campuses/${id}`);
      dispatch(showOneCampus(data));
    } catch (err) {
      console.error(err);
    }
  }
}

export const addNewCampus = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/campuses')
      dispatch(addedCampus(data));
    } catch (err) {
      console.error(err);
    }
  }
}

export const removeCampus = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/campuses/${id}`);
      dispatch(removedCampus(id));
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
    case ADDED_CAMPUS:
      return [...state, action.campus];
    case REMOVED_CAMPUS:
      return state.filter(campus => campus.id !== action.id);
    default:
      return state;
  }
}

export default reducer;
