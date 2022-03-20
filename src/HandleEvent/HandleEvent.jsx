import React, { Component } from 'react'

export default class HandleEvent extends Component {
  showMessage = () =>{
        alert('Hello');
  }
  sayHello = (name) => {
      alert('Hi !' + name);
  }
  render() {
    return (
      <div className='container'>
          <h3>Handle Event</h3>
          <button id='btn' className='btn btn-success' onClick={this.showMessage}>Click me</button>
          <button id='btn' className='btn btn-success' onClick={() =>{
        alert('Hello');}}>Click me</button>
          <hr />
          <h3>Handling Event with parameters</h3>
          <button className='bnt btn-success' onClick={this.sayHello.bind(this,"Hai")}>Say Hello</button>
          <button className='btn btn-primary' onClick={() =>{
              this.sayHello('Hello Hai cute');
              //Can call many functions at once
          
          }}>Click</button>
      </div>
    )
  }
}
