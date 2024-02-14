import React from 'react'

function PersonForm({addNewPerson, newName, addNewName, newNumber, addNewNumber}) {
  return (
    <form onSubmit={addNewPerson}>
        <div>
          name: <input value={newName} onChange={addNewName} required />
        </div>
        <div>
          number: <input value={newNumber} onChange={addNewNumber} required />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
  )
}

export default PersonForm