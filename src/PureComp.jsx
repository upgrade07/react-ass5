import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
      const {about="A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components."}=this.props
    return (
      <div >
          <h2>This is created by using pure component that extends PureComponent in class.</h2>
          <h4>{about}</h4>
      </div>
    )
  }
}


