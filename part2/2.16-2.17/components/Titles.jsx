import React from 'react'

function Titles({Title, Category}) {
  return (
    <>
    {
        Category===2? (<h2>{Title}</h2>) : (<h3>{Title}</h3>)
    }
    </>
  )
}

export default Titles