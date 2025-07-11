import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props)=> {
    
    const renderContactList = props.contacts.map((contacts) =>{
        return (
           <div>
                <ContactCard contacts={contacts}></ContactCard>
           </div>
        )
    })

    return (
        <div className="ui called list">
            {renderContactList}
        </div>
    );
}

export default ContactList;