import React, { Component } from 'react'

export class Item extends Component {
  render() {
    return (
      <div className='item'>
        <img src = {this.props.item.image} width = {160} height = {180}></img>
        <b>{this.props.item.category}</b>
        <p>{this.props.item.title}</p>
        <p>{this.props.item.desc}</p>
        <b>{this.props.item.price}$</b>
        <div className='add-to-cart' onClick={()=>this.props.onAdd(this.props.item)}>+</div>
      </div>
    )
  }
}

export default Item

