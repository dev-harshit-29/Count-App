import React, { useState } from 'react'
import "./Box.css"


function Box() {
  const [initial,setInitial] = useState(0);
  return (
    <div className='box'>
        <h3 className='incHeading'>Increment and Decrement</h3>
        <div className='whiteBox'>
            <input type="button" value='-' id='mbtn' className='flexitems' onClick={Decrement}/> 
            <h4 className='flexitems'> {initial} </h4>
            <input type="button" value='+' id='pbtn'className='flexitems' onClick={Increment} /> 
        </div>
        <div>
            <input type="button" value='Reset' id='reset_btn'className='' onClick={Reset} /> 
        </div>
    </div>
  )

  function Increment(){
    return(
        setInitial(initial+1)
    );
  }
  function Decrement(){
      if(initial>0){
          return setInitial(initial-1)
        }
    ;
  }

  function Reset(){
    return(
        setInitial(0)
    );
  }

}
export default Box;
