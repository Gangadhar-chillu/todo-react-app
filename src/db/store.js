import { toast } from "react-toastify";

let contacts =  JSON.parse(localStorage.getItem('contacts')) || []; // JSON.parse -> string to json

// update the value in localstorage
const updateStorage = (data) => {
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
        updateStorage(contacts);
        toast.success('New Contact Created Successfully');
        window.location.href = "/"
    }
}

// all contact read logic
export const readContacts = () => {
    return contacts;
}

//return single contact
export const readContact = (id) => {
    let extContact = contacts.find((item) => item.id == id);
    return extContact
}

// update contact
export const updateContacts = (id,contact) => {
    let extIndex = contacts.findIndex((item) => item.id == id);

    let data = {
        id : Number(id),
        ...contact
    };
    contacts.splice(extIndex,1,data);
    updateStorage(contacts);
    toast.success('Contacts Updated Successfully')
    window.location.href = "/";
}

// delete

export const deleteContact = (id) => {
    let extIndex = contacts.findIndex((item) => item.id == id)
    contacts.splice(extIndex,1)
    updateStorage(contacts)
    toast.success('Contact Deleted Successfully')
    window.location.href = "/";
}

