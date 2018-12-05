import Redux from 'redux';
import axios from 'axios';

const initialState = [];

// Action Types
const GOT_ALL_STUDENTS = 'GOT_ALL_STUDENTS';
const SHOW_ALL_STUDENTS = 'SHOW_ALL_STUDENTS';
const SHOW_ONE_STUDENT = 'SHOW_ONE_STUDENT';
const ADDED_STUDENT = 'ADDED_STUDENT';
const FETCH_ALL_STUDENTS = 'FETCH_ALL_STUDENTS';

// Action Creators
export const gotAllStudents = (students) => {
  return {
    type: GOT_ALL_STUDENTS,
    students
  }
}

export const showAllStudents = () => {
  return {
    type: SHOW_ALL_STUDENTS
  }
}

export const showOneStudent = id => {
  return {
    type: SHOW_ONE_STUDENT,
    id
  }
}

// Thunk Creators
export const fetchAllStudents = () => {
  return async (dispatch) => {
    const { data } = await axios.get('/api/students');
    dispatch(gotAllStudents(data));
  }
}


const reducer = (state = initialState, action) => {
  let newState = [...state];
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      newState = [...state, ...action.students];
      return newState;
    default:
      return state;
  }
}

export default reducer;

