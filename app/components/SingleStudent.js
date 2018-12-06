import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../reducers/students';

class SingleStudent extends Component {
  componentDidMount() {
    this.props.fetchSingleStudent(this.props.match.params.id);
  }

  render() {
    const entry = this.props.students[0];
    if (!entry) {
      return (
        <h1>We're Sorry. That Student is not Registered.</h1>
      )
    }
    else {
      const { student, campus } = entry;
      return (
        <div>
          <div id='student'>
            {student ?
              <div>
                <img src={student.imageUrl} width='300' />
                <h2>{student.firstName} {student.lastName}</h2>
                <p>{student.email}</p>
                <p>GPA: {student.gpa}</p>
              </div>
              : ''
            }
          </div>
          <div id='campus'>
            <h2>Home Campus:</h2>
            <div>
              {campus ?
                <div>
                  <Link to={`/campuses/${campus.id}`} >
                    <img src={campus.imageUrl} width='200' />
                    <p>{campus.name}</p>
                  </Link>
                </div>
                : <h4>This student is not assigned a campus at this time.</h4>
              }
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    students: state.students
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleStudent: (id) => dispatch(fetchSingleStudent(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
