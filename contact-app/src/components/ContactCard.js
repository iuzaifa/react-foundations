import React from 'react'
import boy from '../images/boy.png'

const ContactCard = (props) => {
    const {id, name, email} = props.contacts;
    return (
        <div className="d-flex align-items-center border-bottom py-3">
           <img
                src={boy}
                alt="user"
                className="rounded-circle me-3 border p-1"
                style={{ width: "50px", height: "50px", objectFit: "cover" }}
            />
            
            <div className="flex-grow-1">
                <h5 className="mb-1">{name}</h5>
                <p className="mb-0 text-muted">{email}</p>
            </div>
            <i class="fa fa-trash-o" aria-hidden="true"></i>
        </div>
    )
}

export default ContactCard
