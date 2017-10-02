import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom'
import { FunctionChildRoute } from '../../../lib/'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <FunctionChildRoute exact path='/'>
            {({match, location, history}) => {
              return match ? (
                <div>
                  <p><Link to='/login/18/'>Login 18</Link></p>
                  <p><Link to='/login/25/'>Login 25</Link></p>
                </div>
              ) : null
            }}
          </FunctionChildRoute>
          <FunctionChildRoute path='/login/'>
            {({match, location, history}) => {
              return match ? (
                <FunctionChildRoute path='/login/:id'>
                  {({match, location, history}) => {
                    if (parseInt(match.params.id, 10) < 25) {
                      return <Redirect to='/' />
                      return <Link to='/'>{'Home Page < 25'}</Link>
                    }
                    return <Link to='/'>Home Page > 25</Link>
                  }}
                </FunctionChildRoute>
              ) : null
            }}
          </FunctionChildRoute>
        </div>
      </BrowserRouter>
    )
  }
}

App.contextTypes = {
  router: PropTypes.object
};

render(<App />, document.getElementById('view'))
