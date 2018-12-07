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
    if (this.props.busy) {
      return (
        <h2>Accessing data ...</h2>
      )
    };
    return (
      <div>
        <h2>Our Campuses</h2>
        <div className='flex'>
          {this.props.campuses.map(campus => <div className='middle' key={campus.id}>
            <button onClick={() => this.handleClick(campus.id)}>X</button>
            <Link to={`/campuses/${campus.id}`}>
              <img src={campus.imageUrl} width='100' />
              {campus.name}
            </Link>
          </div>)}
        </div>
        <AddCampus />
      </div>
    );
  };
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    busy: state.busy
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampuses()),
    removeCampus: (id) => dispatch(removeCampus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllCampuses);
