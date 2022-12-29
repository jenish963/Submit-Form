import React, {useState} from 'react'
import './Form.css'
import Table from './Table'
//import Table from './Table'
import Validation from './Validation'

function Form() {

    const initialValue = {
        'firstname': "",
        'lastname': "",
        'profession': "",
        'mobile': "",
        'email': "",
        'address': ""
    }

    const [value, setValue] = useState(initialValue)
    const [array, setArray] = useState([])
    const [showButton, setShowButton] = useState(true)
    const [update, setUpdate] = useState()

    let {firstname, lastname, profession, mobile, email, address} = value

    const getValue = (e) => {
        setValue({
            ...value,
            [e.target.name] : e.target.value
        })
    }

    const submitValues = (e) => {
        e.preventDefault()
        if (Validation(value)) {
            setArray([...array, {firstname, lastname, profession, mobile, email, address}])
            setValue({firstname: '', lastname: '', profession: '', mobile: '', email: '', address: ''})
        }
        
    }

    const updateData = (e) => {
        e.preventDefault()
        array.splice(update,1,value)
        setArray([...array])
        setShowButton(true)
        setValue({firstname: '', lastname: '', profession: '', mobile: '', email: '', address: ''})
    }

  return (
    <React.Fragment>
        <div className='containor'>
            <form>
                <h1>FORM</h1><hr></hr>
                <div>
                <label>First Name:  </label>
                <input type='text' placeholder='Write Your First Name' name='firstname' value={value.firstname} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>Last Name:   </label>
                <input type='text' placeholder='Write Your Last Name' name='lastname' value={value.lastname} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>Profession:  </label>
                <select placeholder='Select Your Proffesion' name='profession' value={value.profession} onChange={getValue}>
                <option value=''></option>
                <option value='Developer'>Developer</option>
                <option value='Designer'>Designer</option>
                <option value='Project Manager'>Project Manager</option>
                <option value='Tester'>Tester</option>
                </select>
                </div>
                <br/>
                <div>
                <label>Mobile No:    </label>
                <input type='text' placeholder='Write Your Mobile No' name='mobile' value={value.mobile} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>E-mail ID:    </label>
                <input type='text' placeholder='Write Your E-mail ID' name='email' value={value.email} onChange={getValue}/>
                </div>
                <br/>
                <div>
                <label>Address:     </label>
                <input type='text' placeholder='Write Your Address' name='address' value={value.address} onChange={getValue}/>
                </div>
                <br/>
                <div>
                { showButton ? <button onClick={submitValues}>SUBMIT</button> : <button onClick={updateData}>UPDATE</button> }
                </div>
            </form><hr></hr>
            <pre>{ JSON.stringify(value, undefined, 2)}</pre><hr/>
            <Table  like={value} A={array} sA={setArray} sV={setValue} sU={setUpdate} sSB={setShowButton}/>
        </div>
    </React.Fragment>
  )
}

export default Form