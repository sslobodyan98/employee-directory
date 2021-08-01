import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddEmployee = ({ onAdd }) => {
    const [firstName, setFN] = useState('')
    const [lastName, setLN] = useState('')
    const [department, setDeptartment] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!firstName || !lastName || !department){
            alert('Please complete all the information')
            return
        }

        onAdd({ firstName, lastName, department})

        setFN('')
        setLN('')
        setDeptartment('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>First Name</label>
                <input type='text' placeholder='First Name' value= {firstName} 
                onChange={(e) => setFN(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Last Name</label>
                <input type='text' placeholder='Last Name' value= {lastName} 
                onChange={(e) => setLN(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Department</label>
                <input type='text' placeholder='Department' value= {department} 
                onChange={(e) => setDeptartment(e.target.value)}/>
            </div>
    
            <input type='submit' value='Save Employee' className='btn-save'/>
            
        </form>
    )
}

export default AddEmployee
