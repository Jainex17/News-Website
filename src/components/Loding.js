import React, { Component } from 'react'
import lodingGif from './lodinggif.gif'
export class Loding extends Component {
  render() {
    return (
        <div className='text-center'>
      <img className='my-3' src={lodingGif} alt="loding img" style={{width:"35px"}}/>
        </div>
    )
  }
}

export default Loding