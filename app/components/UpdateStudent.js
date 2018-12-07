import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateStudent } from '../reducers/students';

class UpdateStudent extends Component {
  constructor(props) {
    super(props);

    // set local state to passed-down props for filling in the update form
    this.state = this.props.student;

    // bind internal functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeGPA = this.changeGPA.bind(this);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.updateStudent(this.state.id, this.state);
  }

  changeFirstName(e) {
    this.setState({ firstName: e.target.value });
  }

  changeLastName(e) {
    this.setState({ lastName: e.target.value });
  }


  changeEmail(e) {
    this.setState({ email: e.target.value });
  }

  changeImage(e) {
    this.setState({ imageUrl: e.target.value });
  }

  changeGPA(e) {
    this.setState({ gpa: +e.target.value });
  }

  render() {
    return (
      <div className='addOne'>
        <h3>Update Student Information:</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='updated-student-firstname'>New Student First Name</label>
          <input type='text' id='updated-student-firstname' value={this.state.firstName} onChange={this.changeFirstName} /><br />
          <label htmlFor='updated-student-lastname'>New Student Last Name</label>
          <input type='text' id='updated-student-lastname' value={this.state.lastName} onChange={this.changeLastName} /><br />
          <label htmlFor='updated-student-email'>Student Email</label>
          <input type='text' id='updated-student-email' size='40' value={this.state.email} onChange={this.changeEmail} /><br />
          <label htmlFor='updated-student-imageUrl'>Image URL</label>
          <input type='text' id='updated-student-imageUrl' size='40' value={this.state.imageUrl} onChange={this.changeImage} /><br />
          <label htmlFor='updated-student-gpa'>GPA (number between 0.0 and 4.0)</label>
          <input type='number' id='updated-student-gpa' min='0.0' max='4.0' step='0.1' value={this.state.gpa} onChange={this.changeGPA} /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateStudent: (id, updateStudentObj) => dispatch(updateStudent(id, updateStudentObj))
  }
}

export default connect(null, mapDispatchToProps)(UpdateStudent);
