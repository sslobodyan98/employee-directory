import { FaTimes } from 'react-icons/fa'

const Employee = ({employee, onDelete}) => {
    return (
        <div className='task'>
            <img
                style={{ maxWidth: "60px"}}
                src={employee.image}
                alt="employee"
            />
            <h3>{employee.name}
            <FaTimes style={{ color:'red', cursor: 'pointer'}}
            onClick={() => onDelete(employee.id)}/>
            </h3>
            <p>{employee.department}</p>
        </div>
    )
}

export default Employee

