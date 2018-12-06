import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewCampus } from '../reducers/campuses';

class AddCampus extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      address: '',
      description: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewCampus(this.state);
  }

  changeName(e) {
    this.setState({ name: e.target.value });
  }

  changeAddress(e) {
    this.setState({ address: e.target.value });
  }

  changeImage(e) {
    this.setState({ imageUrl: e.target.value });
  }

  changeDescription(e) {
    this.setState({ description: e.target.value });
  }

  render() {
    return (
      <div className='addOne'>
        <h3>Add a New Campus:</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='new-campus-name'>New Campus Name (Required)</label>
          <input type='text' id='new-campus-name' required='true' value={this.state.name} onChange={this.changeName} /><br />
          <label htmlFor='new-campus-address'>Campus Address (Required)</label>
          <input type='text' id='new-campus-address' required='true' size='40' value={this.state.address} onChange={this.changeAddress} /><br />
          <label htmlFor='new-campus-imageUrl'>Image URL</label>
          <input type='text' id='new-campus-imageUrl' size='40' value={this.state.imageUrl} onChange={this.changeImage} /><br />
          <label htmlFor='new-campus-description'>Description</label>
          <input type='text' id='new-campus-description' size='100' value={this.state.description} onChange={this.changeDescription} /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNewCampus: (newCampusObj) => dispatch(addNewCampus(newCampusObj))
  }
}

export default connect(null, mapDispatchToProps)(AddCampus);
