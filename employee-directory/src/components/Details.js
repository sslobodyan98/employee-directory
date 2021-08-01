import Employee from './Employee'

const Details = ({ details, onDelete}) => {
    
    return (
        <>
           {details.map((employee)=> (
           <Employee className="container" key={employee.id} employee={employee} onDelete={onDelete}/>
           ))} 
        </>
    )
}

export default Details
