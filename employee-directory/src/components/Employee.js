import { FaTimes } from 'react-icons/fa'

const Employee = ({employee, onDelete}) => {
    return (
        <div className='task'>
            <img
                style={{ maxWidth: "60px"}}
                src={employee.image}
                alt="picture_broken"
            />
            <h3>{employee.name}
            <FaTimes style={{ color:'red', cursor: 'pointer'}}
            onClick={() => onDelete(employee.id)}/>
            </h3>
            <p>{employee.department}</p>
            <p>{employee.phone}</p>
        </div>
    )
}

export default Employee

