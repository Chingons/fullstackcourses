import React from 'react'

function Persons({name,number, idPerson, deletedPerson}) {
  return (
      <p>{name} {number} <button onClick={() => deletedPerson(idPerson, name)}>delete</button> </p>
  )
}

export default Persons