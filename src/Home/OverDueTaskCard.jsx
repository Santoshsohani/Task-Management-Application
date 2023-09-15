import React from 'react'

const OverDueTaskCard = (props) => {

    const { id, DueData, Description, Title } = props.data;

  return (
    <div className='card'>
          <h1>{Title}</h1>
          <p>{Description}</p>
          <p>{DueData}</p>
    </div>
  )
}

export default OverDueTaskCard
