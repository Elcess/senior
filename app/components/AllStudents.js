import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStudents } from '../reducers/students';

class AllStudents extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    console.log(Array.isArray(this.props.students));
    return (
      <div>
        <h2>All Students</h2>
        <ul>
          {this.props.students.map(student => <li key={student.id}>
            {student.firstName} {student.lastName}
          </li>)}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    students: state.students
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudents())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
