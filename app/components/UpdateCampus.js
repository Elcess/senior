import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCampus } from '../reducers/campuses';

class UpdateCampus extends Component {
  constructor(props) {
    super(props);

    // set local state to passed-in props to populate update form
    this.state = this.props.campus;

    // bind internal functions
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeAddress = this.changeAddress.bind(this);
    this.changeImage = this.changeImage.bind(this);
    this.changeDescription = this.changeDescription.bind(this);
  }

  componentDidMount() {
    this.setState(this.props.campus);
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.updateCampus(this.state.id, this.state);
    this.setState(this.props.campus);
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
        <h3>Update Campus Information:</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='updated-campus-name'>Campus Name (Required) </label>
          <input type='text' id='updated-campus-name' required='true' value={this.state.name} onChange={this.changeName} /><br />
          <label htmlFor='updated-campus-address'>Campus Address (Required) </label>
          <input type='text' id='updated-campus-address' size='40' required='true' value={this.state.address} onChange={this.changeAddress} /><br />
          <label htmlFor='updated-campus-imageUrl'>Image URL </label>
          <input type='text' id='updated-campus-imageUrl' size='40' value={this.state.imageUrl} onChange={this.changeImage} /><br />
          <label htmlFor='updated-campus-description'>Description </label>
          <textarea id='updated-campus-description' cols='100' value={this.state.description} onChange={this.changeDescription} /><br />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateCampus: (id, newCampusObj) => dispatch(updateCampus(id, newCampusObj))
  }
}

export default connect(null, mapDispatchToProps)(UpdateCampus);
