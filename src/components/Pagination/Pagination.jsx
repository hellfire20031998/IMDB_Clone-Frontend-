import React from 'react'
import './Pagination.css'

function Pagination({pageNumber, handleNext , handleprev}) {

  return (
    <div className='pagination'>
        <div className='prev' onClick={handleprev}>prev</div>

        <div>{pageNumber}</div>

        <div className='next' onClick={handleNext}>next</div>
      
    </div>
  )
}

export default Pagination
