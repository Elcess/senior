import Redux from 'redux';
import axios from 'axios';

const initialState = [];

// Action Types
const GOT_ALL_STUDENTS = 'GOT_ALL_STUDENTS';
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

export const showOneStudent = student => {
  return {
    type: SHOW_ONE_STUDENT,
    student
  }
}

// Thunk Creators
export const fetchAllStudents = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/students');
      dispatch(gotAllStudents(data));
    } catch (err) {
      console.error(err);
    }
  }
}

export const fetchSingleStudent = id => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/students/${id}`);
      dispatch(showOneStudent(data));
    } catch (err) {
      console.error(err);
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return [...action.students];
    case SHOW_ONE_STUDENT:
      return [action.student];
    default:
      return state;
  }
}

export default reducer;

