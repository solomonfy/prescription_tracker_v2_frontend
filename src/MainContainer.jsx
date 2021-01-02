import React, {useState, useEffect} from 'react'
import MedicationsTobeTaken from "./components/MedicationsTobeTaken"

function MainContainer(props) {
  let USER_URL = props.USER_URL
  let PRESCRIPTIONS_URL = props.PRESCRIPTIONS_URL
  const [prescriptions, setPrescriptions] = useState([])
  const [users, setUsers] = useState([])


useEffect(() => {
  fetch(USER_URL)
  .then(resp => resp.json())
  .then(data => {
    setUsers(data)
  })

  fetch(PRESCRIPTIONS_URL)
  .then(resp => resp.json())
  .then(data => {
    setPrescriptions(data)
  })
}, [])

  return (
    <div>
      <MedicationsTobeTaken prescriptions={prescriptions} users={users}/>
    </div>
  )
}

export default MainContainer
