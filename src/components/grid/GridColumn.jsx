import React from 'react';
import { DropTarget } from 'react-dnd';

import Ticket from 'src/components/ticket/Ticket'
import { ticketFlow } from 'src/components/ticket/ticket'

import './GridColumn.css';

const columnTarget = {
    drop({moveTicket, status}, monitor) {
        const { ticketId, ticketStatus } = monitor.getItem();
        moveTicket({id: ticketId}, ticketStatus, status);
    },    
    canDrop({ status }, monitor) {
        const { ticketStatus } = monitor.getItem();
        const { allowedStatuses = [] } = ticketFlow[ticketStatus];
        return ticketStatus !== status && allowedStatuses.indexOf(status) !== -1;
    }    
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
        item: monitor.getItem()
    };
}

const GridColumn = ({ className, title, tickets, status, moveTicket, selectTicket, selectedTicket, connectDropTarget, isOver, canDrop, item }) => {
    const { prevStatus, nextStatus } = ticketFlow[status] || {};
    const dropTargetClass = resolveDropTargetClass({ isOver, canDrop, item })
    return connectDropTarget(<div className={`${className} ${dropTargetClass}`}>
        <div className='grid-column-title'>{title}</div>
        { tickets.map(ticket => 
            <Ticket key={ticket.id} {...ticket}  
                moveRight={nextStatus && (() => moveTicket(ticket, status, nextStatus))} 
                moveLeft={prevStatus && (() => moveTicket(ticket, status, prevStatus))}
                onClick={() => selectTicket(ticket)} 
                isSelected={ticket === selectedTicket}
                status={status}
            />)
        }
    </div>)
};

function resolveDropTargetClass({ isOver, canDrop, item }) {
    const noDrop = item && !canDrop && 'no-drop';
    const mayDrop = !isOver && canDrop && 'can-drop';
    const drop = isOver && canDrop && 'drop';

    return noDrop || mayDrop || drop || '';
}


export default DropTarget('ticket', columnTarget, collect)(GridColumn);