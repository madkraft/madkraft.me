import Router from 'ampersand-router'
import React from 'react'
import { render } from 'react-dom'
import Layout from './layout'
import HomePage from './pages/home'
import AboutPage from './pages/about'
import WorkPage from './pages/work'

const root = document.getElementById('root')

export default Router.extend({

  routes: {
    '': 'home',
    'about': 'about',
    'work': 'work'
  },

  renderPage (page) {
    page = (
      <Layout>
        {page}
      </Layout>
    )

    render(page, root)
  },

  home () {
    this.renderPage(<HomePage />)
  },

  about () {
    this.renderPage(<AboutPage />)
  },

  work () {
    this.renderPage(<WorkPage />)
  }

})
