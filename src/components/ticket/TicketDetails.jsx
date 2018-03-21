import React from 'react';

import './TicketDetails.css';

const TicketDetails = ({ticket: propTicket, close, updateTicket}) => {

    const state = propTicket ? 'open' : 'close';
    const ticket = propTicket || {};

return (<div className={`ticket-details ${state}`}>
        <span className='ticket-details-id'>Ticket #{ticket.id}</span>
        <div className={`ticket-details-type ${ticket.type ? ticket.type.toLowerCase() : ''}`}>{ticket.type}</div>
        <div className='ticket-details-title'>{ticket.title}</div>
        <div className='ticket-details-description'>
            <span>Description:</span>	
            <p>{ticket.description}</p>
        </div>
        <div className='ticket-details-comments'>
            <span>Comments:</span>
            <ol className='ticket-details-comment-list'>
                {(ticket.comments || []).map((comment, index) => <li key={index}>{comment}</li>)}
            </ol>
            <input ref={ ref => this._commentInput = ref}  type='edit' placeholder='Enter a comment...'/>
            <button onClick={() => {
                if(this._commentInput && this._commentInput.value) {
                    updateTicket({
                        ...ticket, 
                        comments: [
                            ...ticket.comments, 
                            this._commentInput.value
                        ]
                    })
                    this._commentInput.value = '';
                }}}>add</button>
        </div>
        <div className='ticket-details-controls'>
            <button className='close-button' onClick={close}>close</button>
        </div>
</div>)};

export default TicketDetails;