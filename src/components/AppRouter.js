import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Container from 'react-bootstrap/lib/Container'
import Row from 'react-bootstrap/lib/Row'
import Col from 'react-bootstrap/lib/Col'
import Header from './Header'

const Index = () => <h2>Home</h2>
const Signin = () => <h2>Signin</h2>
const Signup = () => <h2>Signup</h2>

const AppRouter = () => (
  <Router>
    <div>
      <Header />
      <Container>
        <Row>
          <Col xs={12}>
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
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Route path='/' exact component={Index} />
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={Signup} />
          </Col>
        </Row>
      </Container>
    </div>
  </Router>
)

export default AppRouter
