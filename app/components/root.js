import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import Home from './Home';
import NotFound from './NotFound';

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
            <Route path='/campuses/:id' component={SingleCampus} />
            <Route path='/campuses' component={AllCampuses} />
            <Route path='/students/:id' component={SingleStudent} />
            <Route path='/students' component={AllStudents} />
            <Route exact path='/' component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Root
