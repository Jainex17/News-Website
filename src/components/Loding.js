import lodingGif from './lodinggif.gif'
import React from "react";

const  Loding = () => {
    return (
        <div className='text-center'>
      <img className='my-3' src={lodingGif} alt="loding img" style={{width:"35px"}}/>
        </div>
    )
}

export default Loding