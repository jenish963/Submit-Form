import React from 'react'

function Table(props) {

    const deleteData = (index) => {
        props.A.splice(index,1)
        props.sA([...props.A])
    }

    const editData = (index) => {
        props.sV(props.A[index])
        props.sSB(false)
        props.sU(index)
    }

  return (
    <div>
        <table border={2} align={'center'}>
            <tbody>
                <tr>
                    <td>FIRST NAME</td>
                    <td>LAST NAME</td>
                    <td>PROFESSION</td>
                    <td>MOBILE NO</td>
                    <td>E-MAIL ID</td>
                    <td>ADDRESS</td>
                    <td>EDIT</td>
                    <td>DELETE</td>
                </tr>
                {props.A.map(
                    (data, index) => {
                        return(
                            <tr key={index}>
                                <td>{data.firstname}</td>
                                <td>{data.lastname}</td>
                                <td>{data.profession}</td>
                                <td>{data.mobile}</td>
                                <td>{data.email}</td>
                                <td>{data.address}</td>
                                <td><button onClick={()=> editData(index)}>EDIT</button></td>
                                <td><button onClick={()=> deleteData(index)}>DELETE</button></td>
                                </tr>
                            )
                    }
                )
                }
            </tbody>
        </table>
    </div>
  )
}

export default Table