import { toast } from "react-toastify";

let contacts =  JSON.parse(localStorage.getItem('contacts')) || []; // JSON.parse -> string to json

// update the value in localstorage
const updateContact = (data) => {
    localStorage.setItem('contacts', JSON.stringify(data)) // JSON.stringify -> json object to string
}
 
// store logic
export const createContact = (contact)=> {
    // check if email exist in db or not
    let exEmail = contacts.find((item) => item.email === contact.email);
    // check if mobile number exist in db or not
    let exMobile = contacts.find((item) => item.mobile === contact.mobile);

    if(exEmail) {
        toast.warning('User Email Already Registerd');
    } else if(exMobile) {
        toast.warning('User Mobile Number Already Registerd')
    } else {
        // if mobile and email not exist -> store new contact data in local storage
        contacts.push(contact);
        updateContact(contacts);
        toast.success('New Contact Created Successfully');
        window.location.href = "/"
    }
}

