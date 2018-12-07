import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllStudents, removeStudent } from '../reducers/students';
import AddStudent from './AddStudent';

class AllStudents extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.props.removeStudent(id);
  }

  componentDidMount() {
    this.props.fetchAllStudents();
  }

  render() {
    if (this.props.busy) {
      return (
        <h2>Accessing data ...</h2>
      )
    }
    return (
      <div>
        <h2>Our Students</h2>
        <ul>
          {this.props.students.map(student => <li key={student.id}>
            <button onClick={() => this.handleClick(student.id)}>X</button>
            <Link to={`/students/${student.id}`} >
              {student.firstName} {student.lastName}
            </Link>
          </li>)}
        </ul>
        <AddStudent />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    students: state.students,
    busy: state.busy
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudents()),
    removeStudent: (id) => dispatch(removeStudent(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllStudents);
