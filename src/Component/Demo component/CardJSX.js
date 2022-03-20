// rcc: react class component
import React, { Component } from 'react'

export default class CardJSX extends Component {
    //Render function contains the content of 
    render() {
    //Displayed content will be in return demand
    return (
      <div className='card w-25'>
          <img src='https://picsum.photos/200' />
          <div className='card-body'>
              <p>Iphone</p>
              <p>1000$</p>
          </div>
      </div>
    )
  }
}
