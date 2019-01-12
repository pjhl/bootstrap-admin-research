import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

const Index = () => <h2>Home</h2>
const Signin = () => <h2>Signin</h2>
const Signup = () => <h2>Signup</h2>

const AppRouter = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/signin'>Signin</Link>
          </li>
          <li>
            <Link to='/signup'>Signup</Link>
          </li>
        </ul>
      </nav>

      <Route path='/' exact component={Index} />
      <Route path='/signin' component={Signin} />
      <Route path='/signup' component={Signup} />
    </div>
  </Router>
)

export default AppRouter
