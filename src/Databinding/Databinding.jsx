import React, { Component } from 'react'

export default class Databinding extends Component {
    userName = 'abc';
    product = {
        id:1,
        name:'Iphone',
        img:'https://picsum.photos/id/1/200',
        price: 1000,
    }
    //Property is function => method
    renderProduct = () => {
        // output content should be string, number, component ( content in cover tag)
        return(
            <div className='card w-25'>
              <img src={this.product.img} alt="..." className="w-100" />
                <div className='card-body'>
                    <p>{this.product.name}</p>
                    <p>{this.product.price.toLocaleString()}</p>
                    <button className='btn btn-success'> Add to Cart</button>
                </div>
          </div>
        )
    }
    
    // 1 kind of render function
    render() {
      let title = 'hello Cybersoft';
      let product = {
          id:1,
          name:'Iphone',
          img:'https://picsum.photos/id/1/200',
          price: 1000,
      }
    return (
      <div className='container'>
          <h3>Databinding</h3>
          <p id='title'>{title}</p>
          <p> username: {this.userName}</p>
          <hr />
          <div className='card w-25'>
              <img src={product.img} alt="..." className="w-100" />
                <div className='card-body'>
                    <p>{product.name}</p>
                    <p>{product.price.toLocaleString()}</p>
                    <button className='btn btn-success'> Add to Cart</button>
                </div>
          </div>
      </div>
    )
  }
}
