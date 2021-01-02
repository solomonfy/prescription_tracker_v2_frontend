import React from 'react'

function MedicationsTobeTaken({prescriptions, users}) {

  console.log(prescriptions)

  return (
    <div>
      {users.map(user => <h3>Name: {user.first_name + " " + user.last_name} </h3>)} 
    </div>
  )
}

export default MedicationsTobeTaken
