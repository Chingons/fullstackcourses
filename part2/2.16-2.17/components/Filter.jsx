import React from 'react'

function Filter({inputFilter, lookingFilter}) {
  return (
    <form >
        filter shown with <input value={inputFilter} onChange={lookingFilter} required/>
    </form>
  )
}

export default Filter