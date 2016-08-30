import React from 'react'
import NavComponent from './components/navigation'
import NavHelper from './components/nav-helper'

export default React.createClass({
  displayName: 'Layout',

  render () {
    return (
      <NavHelper>
        <NavComponent />
        <div className='container'>
          {this.props.children}
        </div>
      </NavHelper>
    )
  }
})
