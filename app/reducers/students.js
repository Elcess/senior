import Redux from 'redux';
import axios from 'axios';

const initialState = [];

// Action Types
const GOT_ALL_STUDENTS = 'GOT_ALL_STUDENTS';
const SHOW_ONE_STUDENT = 'SHOW_ONE_STUDENT';
const ADDED_STUDENT = 'ADDED_STUDENT';
const REMOVED_STUDENT = 'REMOVED_STUDENT';
const UPDATED_STUDENT = 'UPDATED_STUDENT';

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

export const addedStudent = student => {
  return {
    type: ADDED_STUDENT,
    student
  }
}

export const removedStudent = (id) => {
  return {
    type: REMOVED_STUDENT,
    id
  }
}

export const updatedStudent = (student) => {
  return {
    type: UPDATED_STUDENT,
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

export const addNewStudent = (student) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post('/api/students', student);
      dispatch(addedStudent(data));
    } catch (err) {
      console.error(err);
    }
  }
}

export const removeStudent = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(`/api/students/${id}`);
      dispatch(removedStudent(id));
    } catch (err) {
      console.error(err);
    }
  }
}

export const updateStudent = (id, update) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/api/students/${id}`, update);
      dispatch(updatedStudent(data));
    } catch (err) {
      console.error(err);
    }
  }
}

// Selectors
export const getStudentsByCampus = (state, campusId) => {
  const students = state.students.filter(student => student.campusId === campusId);
  return students;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_ALL_STUDENTS:
      return [...action.students];
    case SHOW_ONE_STUDENT:
      return [action.student];
    case ADDED_STUDENT:
      return [...state, action.student];
    case REMOVED_STUDENT:
      return state.filter(student => student.id !== action.id);
    case UPDATED_STUDENT:
      return [action.student];
    default:
      return state;
  }
}

export default reducer;

