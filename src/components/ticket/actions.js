
export function moveTicketAction(ticket, {fromStatus, toStatus}) {
    console.dir({
        type: 'MOVE_TICKET', 
        fromStatus, 
        toStatus, 
        value: ticket
    });
    return {
        type: 'MOVE_TICKET', 
        fromStatus, 
        toStatus, 
        value: ticket
    };
}

export function updateTicket(ticket) {
    return {
        type: 'UPDATE_TICKET', 
        value: ticket
    }
}

export function addTicket(ticket) {
    return {
        type: 'ADD_TICKET', 
        value: ticket
    }
}

export function reset() {
    return {
        type: 'RESET'
    }
}

export function clearTickets() {
    return {
        type: 'CLEAR_TICKETS'
    }
}