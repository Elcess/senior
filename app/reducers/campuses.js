import Redux from 'redux';
import axios from 'axios';

const initialState = [];

// Action Types
const GOT_ALL_CAMPUSES = 'GOT_ALL_CAMPUSES';
const SHOW_ALL_CAMPUSES = 'SHOW_ALL_CAMPUSES';
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

export const showAllCampuses = () => {
  return {
    type: SHOW_ALL_CAMPUSES
  }
}

export const showOneCampus = id => {
  return {
    type: SHOW_ONE_CAMPUS,
    id
  }
}

// Thunk Creators
export const fetchAllCampuses = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/campuses');
    dispatch(gotAllCampuses(data));
  }
}


const reducer = (state = initialState, action) => {
  let newState = [...state];
  switch (action.type) {
    case GOT_ALL_CAMPUSES:
      newState = [...state, ...action.campuses];
      return newState;
    default:
      return state;
  }
}

export default reducer;
