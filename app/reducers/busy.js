import Redux from 'redux';

const initialState = false;

// Action Types
const REQUEST_INITIATED = 'REQUEST_INITIATED';
const REQUEST_SUCCEEDED = 'REQUEST_SUCCEEDED';
const REQUEST_FAILED = 'REQUEST_FAILED';

// Action Creators
export const requestInitiated = () => {
  return {
    type: REQUEST_INITIATED
  }
}

export const requestSucceeded = () => {
  return {
    type: REQUEST_SUCCEEDED
  }
}

export const requestFailed = () => {
  return {
    type: REQUEST_FAILED
  }
}

// reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_INITIATED:
      return true;
    case REQUEST_SUCCEEDED:
      return false;
    case REQUEST_FAILED:
      return false;
    default:
      return state;
  }
}

export default reducer;
