import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../reducers/campuses';

class SingleCampus extends Component {
  componentDidMount() {
    this.props.fetchSingleCampus(this.props.match.params.id);
  }

  render() {
    const entry = this.props.campuses[0];
    if (entry) { const { campus, students } = entry; }
    return (
      <div>
        {/* {campus ?
          <div id='campus'>
            <img src={campus.imageUrl} width='300' />
            <h2>{campus.name} - {campus.address}</h2>
            <p>{campus.description}</p>
          </div>
          : ''
        } */}
        <div id='students'>
          <h2>Students:</h2>
          {/* {students ?
            <ul>
              students.map(student => <li key={student.id} >
                <Link to={`/students/${student.id}`} >{student.firstName} {student.lastName}
                </Link></li>)
            </ul>
            : <h4>
              This location has no students at this time.
          </h4>
          } */}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchSingleCampus: (id) => dispatch(fetchSingleCampus(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
