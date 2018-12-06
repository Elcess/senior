import Redux from 'redux';
import axios from 'axios';

const initialState = [];

// Action Types
const GOT_ALL_CAMPUSES = 'GOT_ALL_CAMPUSES';
const SHOW_ONE_CAMPUS = 'SHOW_ONE_CAMPUS';
const ADDED_CAMPUS = 'ADDED_CAMPUS';
const REMOVED_CAMPUS = 'REMOVED_CAMPUS';
const UPDATED_CAMPUS = 'UPDATED_CAMPUS';

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

export const addedCampus = (campus) => {
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

export const updatedCampus = (campus) => {
  return {
    type: UPDATED_CAMPUS,
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
      const { data } = await axios.get(`/api/campuses/${id}`);
      dispatch(showOneCampus(data));
    } catch (err) {
      console.error(err);
    }
  }
}

export const addNewCampus = (campus) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/campuses', campus);
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

export const updateCampus = (id, update) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/campuses/${id}`, update);
      dispatch(updatedCampus(data));
    } catch (err) {
      console.error(err);
    }
  }
}

// Selectors
export const getCampusByStudent = (state, studentId) => {
  const campus = state.campuses.filter(campus => campus.id === studentId);
  return campus;
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
    case UPDATED_CAMPUS:
      return [action.campus];
    default:
      return state;
  }
}

export default reducer;
