import Header from './components/Header'
import Details from './components/Details'
import { useState } from 'react'
import AddEmployee from './components/AddEmployee'
import employees from "./employees.json"



function App() {

const [showAddEmployee, setShowAddEmployee] = useState (false)


  const [details, setDetails] = useState(employees)

const addEmployee = (employee) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newEmployee = { id, ...employee }
  setDetails([...details, newEmployee])

}


const deleteEmployee = (id) => {
  setDetails(details.filter((details) => details.id !==id))
}

  return (
    <div>
      <Header onAdd={() => setShowAddEmployee(!showAddEmployee)} showAdd={showAddEmployee}/>
  {showAddEmployee && <AddEmployee onAdd={addEmployee}/> }
  {details.length > 0 ? <Details details={details} 
  onDelete={deleteEmployee}/> : 'No Employees'}
    </div>
  );

}

export default App;
