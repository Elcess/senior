import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllStudents } from '../reducers/students';

class AllStudents extends Component {
  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    return (
      <div>
        <h2>All Students</h2>
        <ul>
          {this.props.students.map(student => <li key={student.id}>
            {student.name}
          </li>)}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    students: state.students.students
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllStudents
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
