import React from 'react';

import {
    INPUT_TICKETS,
    ACCEPTED_TICKETS,
    RESOLVED_TICKETS,
    CONFIRMED_TICKETS 
} from '../../store/properties';
import Ticket from '../ticket/Ticket'

const ticketFlow = {
    [INPUT_TICKETS]: {
        nextStatus: ACCEPTED_TICKETS
    },
    [ACCEPTED_TICKETS]: {
        nextStatus: RESOLVED_TICKETS
    },
    [RESOLVED_TICKETS]: {
        prevStatus: ACCEPTED_TICKETS,
        nextStatus: CONFIRMED_TICKETS
    }
}


const GridColumn = ({ className, title, tickets, status, moveTicket, selectTicket, selectedTicket }) => {
    const { prevStatus, nextStatus } = ticketFlow[status] || {};

    return <div className={className}>
        <div className='grid-column-title'>{title}</div>
        { tickets.map(ticket => 
            <Ticket key={ticket.id} {...ticket}  
                moveRight={nextStatus && (() => moveTicket(ticket, status, nextStatus))} 
                moveLeft={prevStatus && (() => prevStatus && moveTicket(ticket, status, prevStatus))}
                onClick={() => selectTicket(ticket)} 
                isSelected={ticket === selectedTicket}
            />)
        }
    </div>
};

export default GridColumn;