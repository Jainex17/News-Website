import React, { Component } from 'react'
import lodingGif from './lodinggif.gif'
export class Loding extends Component {
  render() {
    return (
        <div className='text-center'>
      <img src={lodingGif} alt="loding img"/>
        </div>
    )
  }
}

export default Loding