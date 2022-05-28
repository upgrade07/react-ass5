import React, { Component } from 'react';  
import Hoc from './HOC';  
import PureComp from './PureComp';
import './App.css'
  
class App extends Component {  
  render() {  
    return (  
      <div>  
        <div className="hoc">
        <h2>HOC Example:<h1>This is the example created by HocComponent</h1></h2>  
        The App component wrapped inside another React component so that we can modify it. Thus, it becomes the primary application of the Higher-Order Components.
        <h2>Higher-Order Component Conventions</h2>
        <ul>
          <li>Do not use HOCs inside the render method of a component.</li> 
          <li>The static methods must be copied over to have access to them. You can do this using hoist-non-react-statics package to automatically copy all non-React static methods.</li>   
          <li>HOCs does not work for refs as 'Refs' does not pass through as a parameter or argument. If you add a ref to an element in the HOC component, the ref refers to an instance of the outermost container component, not the wrapped component.</li>    
        </ul> 
        </div>
        <div className='pure'>
          <PureComp about="A React component is considered pure if it renders the same output for the same state and props. For this type of class component, React provides the PureComponent base class. Class components that extend the React.PureComponent class are treated as pure components."/> 
          </div>
         
      </div>  
    )  
  }  
}  
App = Hoc(App);  
export default App;  
