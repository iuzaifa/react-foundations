import './App.css';
import React, { useState }  from 'react';
import Header from '../components/Header'
import AddContact from "../components/AddContact"
import ContactList from "../components/ContactList"
import 'font-awesome/css/font-awesome.min.css';

const App = () =>  {
  const [contacts , setContacts] = useState([]);
  const addContactHandler = (contact) => {
    setContacts([...contacts, contact])  
    console.log(contacts)
  }

  return (
    <div className='container'>
        <Header/>
        <AddContact addContactHandler = {addContactHandler} />
        <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
