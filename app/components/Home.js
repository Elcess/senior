import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import NotFound from './NotFound';

const Home = () => {
  return (
    <BrowserRouter >
      <div>
        <main>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default Home
