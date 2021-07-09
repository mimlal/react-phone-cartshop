import React, { Component } from 'react'

export default class Default extends Component {
    render() {
        return (
            <div className="container">
            <div className="row">
             <div className="col-10 mx-auto text-cente text-title text-uppercase pt-5">
              <h1 className="display-3">404</h1>
              <h1>error</h1>
              <h2>page not found</h2>
              <h3>the requested URL<span className="text-dangere">{this.props.location.pathname}</span> is not found</h3>
             </div>
            </div>
               
            </div>
        )
    }
}
