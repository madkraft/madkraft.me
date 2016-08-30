import React from 'react'

export default React.createClass({
  displayName: 'Navigation',

  render () {
    return (
      <div>
        <header>
          <nav>
            <a href='/'>Home</a>
            <a href='/about'>About</a>
            <a href='/work'>Work</a>
          </nav>
        </header>
      </div>
    )
  }
})
