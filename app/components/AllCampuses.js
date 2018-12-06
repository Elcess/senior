import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCampuses } from '../reducers/campuses';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  render() {
    return (
      <div>
        <h2>All Campuses</h2>
        <ul>
          {this.props.campuses.map(campus => <li key={campus.id}>
            <Link to={`/campuses/${campus.id}`}>
              <img src={campus.imageUrl} width='100' />
              {campus.name}
            </Link>
          </li>)}
        </ul>
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampuses())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
