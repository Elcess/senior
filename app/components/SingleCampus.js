import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../reducers/campuses';
import { fetchAllStudents } from '../reducers/students'
import UpdateCampus from './UpdateCampus'

class SingleCampus extends Component {
  componentDidMount() {
    this.props.fetchSingleCampus(this.props.match.params.id);
    this.props.fetchAllStudents();
  }

  render() {
    if (this.props.busy) {
      return (
        <h2>Accessing data ...</h2>
      )
    };
    const campus = this.props.campuses.find(site => site.id === +this.props.match.params.id);
    if (!campus) {
      return (
        <h1>We're sorry. That campus is not open yet.</h1>
      )
    }
    else {
      const students = this.props.students.filter(student => student.campusId === campus.id);
      return (
        <div>
          {campus ?
            <div id='campus'>
              <div className='left'>
                <img src={campus.imageUrl} width='300px' height='300px' />
              </div>
              <div className='right'>
                <h2>{campus.name} - {campus.address}</h2>
                <p>{campus.description}</p>
              </div>
            </div>
            : <h1>We're sorry. That campus is not open yet.</h1>
          }

          <div id='students'>
            <h2>Students:</h2>
            {students.length > 0 ?
              <ul>
                {students.map(student =>
                  <li key={student.id} >
                    <Link to={`/students/${student.id}`} >{student.firstName} {student.lastName}
                    </Link></li>
                )}
              </ul>
              : <h4>
                This location has no students at this time.
          </h4>
            }
          </div>
          <UpdateCampus campus={campus} />
        </div>
      )
    }
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students,
    busy: state.busy
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleCampus: (id) => dispatch(fetchSingleCampus(id)),
    fetchAllStudents: () => dispatch(fetchAllStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
