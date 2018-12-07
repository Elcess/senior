import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleStudent } from '../reducers/students';
import { getCampusByStudent, fetchAllCampuses } from '../reducers/campuses';
import UpdateStudent from './UpdateStudent';

class SingleStudent extends Component {
  async componentDidMount() {
    await this.props.fetchSingleStudent(this.props.match.params.id);
    await this.props.fetchAllCampuses();
  }

  render() {
    const student = this.props.students.find(student => student.id === +this.props.match.params.id);
    if (!student) {
      return (
        <h1>We're sorry. That student is not registered.</h1>
      )
    }
    else {
      const campuses = this.props.campuses.filter(campus => campus.id === student.campusId);
      const campus = campuses[0];
      return (
        <div>
          <div >
            {student ?
              <div id='ss-student'>
                <div className='left'>
                  <img src={student.imageUrl} width='300px' height='300px' />
                </div>
                <div className='right'>
                  <h2>{student.firstName} {student.lastName}</h2>
                  <p>{student.email}</p>
                  <p>GPA: {student.gpa}</p>
                </div>
              </div>
              : <h1>We're sorry. That student is not registered.</h1>
            }
          </div>
          <div id='ss-campus'>
            <div className='left'>
              <h2>Home Campus:</h2>
            </div>
            <div className='right'>
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
          <UpdateStudent student={student} />
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    students: state.students,
    campuses: state.campuses
    // getCampusByStudent(state, state.students[0].campusId)
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleStudent: (id) => dispatch(fetchSingleStudent(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampuses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
