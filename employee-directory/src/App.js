import Header from './components/Header'
import Details from './components/Details'
import { useState } from 'react'
import AddEmployee from './components/AddEmployee'
import employees from './employees.json'
import Navigation from './components/Navigation'

function App() {

const [showAddEmployee, setShowAddEmployee] = useState (false)
const [ searchTerm, setSearchTerm ] = useState("")
const [ data, setEmployees ] = useState(employees)
const [ sorted, setSorted] = useState(false)

function handleSortByName() {
  // sort by first name
  if (!sorted) {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? 1 : -1));
      setSorted(true);
  } else {
      setEmployees(data.sort((a, b) => (a.name > b.name) ? -1 : 1));
      setSorted(false);
  }
}

function handleSortByDept() {
  // sort by department name
  if (!sorted) {
      setEmployees(data.sort((a, b) => (a.department > b.department) ? 1 : -1));
      setSorted(true);
  } else {
      setEmployees(data.sort((a, b) => (a.department > b.department) ? -1 : 1));
      setSorted(false);
  }
}

function handleSearchTerm(event)  {
  setSearchTerm(event.target.value)
}


const [details, setDetails] = useState(employees)

//this will only save it temporarily in the UI, typically this would be done on the backend
const addEmployee = (employee) => {
  const id = Math.floor(Math.random() * 10000) +1
  const newEmployee = { id, ...employee }
  setDetails([...details, newEmployee])

}

//deletes based on id
const deleteEmployee = (id) => {
  setDetails(details.filter((details) => details.id !==id))
}

//apply search filter
const filteredEmployees = details.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));

  return (
    <div>
      <Navigation 
      searchTerm={searchTerm} 
      onSearch={handleSearchTerm} 
      handleSortByName={handleSortByName}
      handleSortByDept={handleSortByDept}
      />
      <Header onAdd={() => setShowAddEmployee(!showAddEmployee)} showAdd={showAddEmployee}/>
  {showAddEmployee && <AddEmployee onAdd={addEmployee}/> }
  {/*Throws error if no employees or no match}*/}
  {details.length > 0 && filteredEmployees.length > 0 ? <Details details={filteredEmployees} 
  onDelete={deleteEmployee}/> : 'No Employees'}
  
    </div>
  );

}

export default App;
