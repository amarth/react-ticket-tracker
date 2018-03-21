import React from 'react';
import { connect } from 'react-redux';

import properties, {
    INPUT_TICKETS,
    ACCEPTED_TICKETS,
    RESOLVED_TICKETS,
    CONFIRMED_TICKETS 
} from 'src/store/properties';
import GridColumn from './GridColumn'
import TicketDetails from 'src/components/ticket/TicketDetails'
import { 
    moveTicketAction, 
    updateTicket 
} from 'src/components/ticket/actions'

import './Grid.css';

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = { selectedTicketId: null };
    }

    render() {
        const { 
            inputTickets, 
            acceptedTickets, 
            resolvedTickets, 
            confirmedTickets,
            moveTicket,
            getTicket,
            updateTicket
        } = this.props;
        const { selectedTicketId } = this.state;
        const selectedTicket = getTicket(selectedTicketId);
        const commonProps = {
            selectedTicket,
            moveTicket,
            selectTicket: (ticket) =>  
                this.setState({
                    selectedTicketId: (selectedTicketId === ticket.id ? null : ticket.id)
                })
        };

        return (<div className='grid'>
            <GridColumn className='input-tickets' title='Inbox' tickets={inputTickets} status={INPUT_TICKETS} {...commonProps}/>
            <GridColumn className='accepted-tickets' title='In Progress' tickets={acceptedTickets} status={ACCEPTED_TICKETS} {...commonProps} />
            <GridColumn className='resolved-tickets' title='Resolved' tickets={resolvedTickets} status={RESOLVED_TICKETS} {...commonProps}/>
            <GridColumn className='confirmed-tickets' title='Confirmed' tickets={confirmedTickets} status={CONFIRMED_TICKETS} {...commonProps} />
            
            <TicketDetails ticket={selectedTicket} close={() => this.setState({selectedTicketId: null})} updateTicket={updateTicket}/> 
        </div>)};
}

export default connect((state) => {
    const tickets = state[properties.TICKETS];
    return {
       inputTickets: state[properties.INPUT_TICKETS].map(id => tickets[id]),
       acceptedTickets: state[properties.ACCEPTED_TICKETS].map(id => tickets[id]),
       resolvedTickets: state[properties.RESOLVED_TICKETS].map(id => tickets[id]),
       confirmedTickets: state[properties.CONFIRMED_TICKETS].map(id => tickets[id]),
       getTicket: (id) => id && tickets[id]
    }
},
(dispatch) => ({
    moveTicket: (ticket, fromStatus, toStatus) => 
        dispatch(moveTicketAction(ticket, {fromStatus, toStatus})),
    updateTicket: (ticket) => 
        dispatch(updateTicket(ticket))
}))(Grid);