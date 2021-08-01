import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const AddEmployee = ({ onAdd }) => {
    const [name, setName] = useState('')
    const [department, setDeptartment] = useState('')
    const [phone, setPhone] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!name || !department || !phone) {
            alert('Please complete all the information')
            return
        }

        onAdd({ name, department, phone})

        setName('')
        setDeptartment('')
        setPhone('')
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Name</label>
                <input type='text' placeholder='Enter Name' value= {name} 
                onChange={(e) => setName(e.target.value)}/>
            </div>

            <div className='form-control'>
                <label>Department</label>
                <input type='text' placeholder='Enter Department' value= {department} 
                onChange={(e) => setDeptartment(e.target.value)}/>
            </div>
            
            <div className='form-control'>
                <label>Phone</label>
                <input type='text' pattern='[0-9]*' placeholder='Enter Phone Number' value= {phone} 
                onChange={(e) => setPhone(e.target.value)}/>
            </div>
    
            <input type='submit' value='Save Employee' className='btn-save'/>
            
        </form>
    )
}

export default AddEmployee
