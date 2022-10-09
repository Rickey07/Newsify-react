import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
        <div className="container">
            <div class="spinner-border text-center" role="status">
            <span class="visually-hidden text-center">Loading...</span>
        </div>
        </div>
    )
  }
}
