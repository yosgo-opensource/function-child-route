import React from 'react'
import { render } from 'react-dom'
import { matchPath } from 'react-router-dom'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'
import getContext from 'recompose/getContext'

const FunctionChildRoute = (props) => {

  const {
    children, router: { history, route: { location, match } },
    path, strict = false, exact = false, sensitive = false
  } = props

  return children({
    location,
    history,
    match: path ? matchPath(location.pathname, { path, strict, exact, sensitive }) : match
  })
}

export default compose(
  getContext({
    router: PropTypes.object.isRequired
  })
)(FunctionChildRoute)
