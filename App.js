import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './app/store'
import Home from './app/containers/Home'

export default class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    )
  }
}
