import React from 'react'

function FormGetCountries({onchangeInput, valueInput}) {
  return (
    <form >
       find countries <input value={valueInput} onChange={onchangeInput} />
    </form>
  )
}

export default FormGetCountries