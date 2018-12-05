import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

const Root = () => {
  return (
    <div>
      <nav>
        Welcome!
      </nav>
      <main>
        <h1>Welcome to the Margaret Hamilton Academy of JavaScript!</h1>
        <BrowserRouter >
          <Switch >
            <Route path='/campuses' component={AllCampuses} />
            <Route path='/students' component={AllStudents} />
          </Switch>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default Root
