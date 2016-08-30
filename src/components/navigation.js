import '../styles/navigation.styl'
import React from 'react'

export default React.createClass({
  displayName: 'Navigation',

  render () {
    return (
      <header>
        <nav className='top-nav top-nav-dark cf' role='navigation'>
          <input id='menu-toggle' className='menu-toggle' type='checkbox' />
          <label for='menu-toggle'>Menu</label>
          <ul className='list-unstyled list-inline cf'>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/about'>About</a>
            </li>
            <li>
              <a href='/work'>Work</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
})
