import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home/home';
import StudentCreateUpdate from './pages/students/student/student';
import StudentView from './pages/students/view/view';

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Router = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route  path='/students/:id' component={StudentCreateUpdate}/>
      <Route  path='/students' component={StudentView}/>
      <Route  path='/student-create' component={StudentCreateUpdate}/>
    </Switch>
  </main>
)

export default Router
