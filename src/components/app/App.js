import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

import { Home } from '../components'
import {Results} from "../../containers/results/Results";

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Container className="App">
          <Route exact path="/" component={Home}/>
          <Route path="/search/" component={Results}/>
        </Container>
      </Router>
    )
  }
}

export default App
