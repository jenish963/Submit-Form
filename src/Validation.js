function Validation(value) {

    if (value.firstname === '' || value.lastname === '' || value.mobile === '') {
        alert ("please enter details...");
        return false;
    } 
    else if(!/^[A-Za-z]+$/.test(value.firstname)) {  
        alert('First Name is incorrect must contain alphabets only');
        return false; 
    }  
    else if(!/^[A-Za-z]+$/.test(value.lastname)) {  
        alert('Last Name is incorrect must contain alphabets only');
        return false;
    } 
    else if (value.profession === '') {
        alert("Please select your profession!");
        return false;
    } 
    else if (value.address === '') {
        alert("enter valid address details");
        return false;
    }   
    else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(value.mobile)) {  
        alert("mobile number is invalid");
        return false;
    }
    else if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value.email)) {
        alert("E-mail ID is invalid");
        return false;
    }
    else {
        alert("Form Submitted Successfully");
        return true;
    }
    // return true;
}

export default Validation