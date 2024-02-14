import React from 'react'

function Notifications({styles,notification}) {
  return (
    <div className={styles}>
        {notification}
        </div>
  )
}

export default Notifications