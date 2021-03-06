import properties from 'src/store/properties';
import generateTicket from 'src/generator/ticketGenerator'

let idCounter = 1;
const tickets = [
    generateTicket(idCounter++), generateTicket(idCounter++), generateTicket(idCounter++),
    generateTicket(idCounter++), generateTicket(idCounter++), generateTicket(idCounter++), generateTicket(idCounter++),
    generateTicket(idCounter++),
    generateTicket(idCounter++), generateTicket(idCounter++), generateTicket(idCounter++), generateTicket(idCounter++)
];

export const defaultState = {
    [properties.TICKETS]: tickets.reduce((acc, ticket)=>({
        ...acc,
        [ticket.id]: ticket
    }), {}),
    [properties.INPUT_TICKETS]: [tickets[0].id, tickets[1].id, tickets[2].id],
    [properties.ACCEPTED_TICKETS]: [tickets[3].id, tickets[4].id, tickets[5].id, tickets[6].id],
    [properties.RESOLVED_TICKETS]: [tickets[7].id],
    [properties.CONFIRMED_TICKETS]: [tickets[8].id, tickets[9].id, tickets[10].id, tickets[11].id],
    [properties.LAST_ID]: tickets.length
};

export const emptyState = {
    [properties.TICKETS]: {},
    [properties.INPUT_TICKETS]: [],
    [properties.ACCEPTED_TICKETS]: [],
    [properties.RESOLVED_TICKETS]: [],
    [properties.CONFIRMED_TICKETS]: [],
    [properties.LAST_ID]: 0
}