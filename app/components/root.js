import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

const Root = () => {
  return (
    <BrowserRouter >
      <div>
        <nav>
          <Link to='/'>
            Welcome!
        </Link>
          <Link to='/campuses'>
            Campuses
        </Link>
          <Link to='/students'>
            Students
        </Link>
        </nav>
        <main>
          <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
          <Switch >
            <Route path='/campuses' component={AllCampuses} />
            <Route path='/students' component={AllStudents} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Root
