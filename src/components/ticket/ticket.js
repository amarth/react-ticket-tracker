import {
    INPUT_TICKETS,
    ACCEPTED_TICKETS,
    RESOLVED_TICKETS,
    CONFIRMED_TICKETS 
} from 'src/store/properties';

export const ticketFlow = {
    [INPUT_TICKETS]: {
        nextStatus: ACCEPTED_TICKETS,
        allowedStatuses: [
            ACCEPTED_TICKETS,
            RESOLVED_TICKETS
        ]
    },
    [ACCEPTED_TICKETS]: {
        nextStatus: RESOLVED_TICKETS,
        allowedStatuses: [
            RESOLVED_TICKETS
        ]
    },
    [RESOLVED_TICKETS]: {
        prevStatus: ACCEPTED_TICKETS,
        nextStatus: CONFIRMED_TICKETS,
        allowedStatuses: [
            ACCEPTED_TICKETS,
            CONFIRMED_TICKETS
        ]
    },
    [CONFIRMED_TICKETS]:{}
}