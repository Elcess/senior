import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllCampuses, removeCampus } from '../reducers/campuses';
import AddCampus from './AddCampus';

class AllCampuses extends Component {
  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  handleClick(id) {
    this.props.removeCampus(id);
  }

  render() {
    return (
      <div>
        <h2>All Campuses</h2>
        <ul>
          {this.props.campuses.map(campus => <li key={campus.id}>
            <button onClick={() => this.handleClick(campus.id)}>X</button>
            <Link to={`/campuses/${campus.id}`}>
              <img src={campus.imageUrl} width='100' />
              {campus.name}
            </Link>
          </li>)}
        </ul>
        <AddCampus />
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
    fetchAllCampuses: () => dispatch(fetchAllCampuses()),
    removeCampus: (id) => dispatch(removeCampus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
