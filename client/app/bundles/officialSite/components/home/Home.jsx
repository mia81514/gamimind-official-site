import PropTypes from 'prop-types'
import React, { Component } from 'react'
import Cover from './Cover'
import ContactUs from './ContactUs'

export default class Home extends React.Component {
  render() {
    return (
      <main>
        <Cover />
        <ContactUs />
      </main>
    )
  }
}
