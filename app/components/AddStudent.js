import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewStudent } from '../reducers/students';

class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      imageUrl: '',
      gpa: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeFirstName = this.changeFirstName.bind(this);
    this.changeLastName = this.changeLastName.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeGPA = this.changeGPA.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewStudent(this.state);
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
      <div>
        <h3>Add a New Student:</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-student-firstname'>New Student First Name (Required)</label>
          <input type='text' id='new-student-firstname' required='true' value={this.state.firstName} onChange={this.changeFirstName} /><br />
          <label htmlFor='new-student-lastname'>New Student Last Name (Required)</label>
          <input type='text' id='new-student-lastname' required='true' value={this.state.lastName} onChange={this.changeLastName} /><br />
          <label htmlFor='new-student-email'>Student Email (Required)</label>
          <input type='text' id='new-student-email' required='true' size='40' value={this.state.email} onChange={this.changeEmail} /><br />
          <label htmlFor='new-student-imageUrl'>Image URL</label>
          <input type='text' id='new-student-imageUrl' size='40' value={this.state.imageUrl} onChange={this.changeImage} /><br />
          <label htmlFor='new-student-gpa'>GPA (number between 0.0 and 4.0)</label>
          <input type='number' id='new-student-gpa' min='0.0' max='4.0' step='0.1' value={this.state.gpa} onChange={this.changeGPA} /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewStudent: (newStudentObj) => dispatch(addNewStudent(newStudentObj))
  }
}

export default connect(null, mapDispatchToProps)(AddStudent);
