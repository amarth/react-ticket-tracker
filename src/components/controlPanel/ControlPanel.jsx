import React from 'react';
import { connect } from 'react-redux';

import { 
    addTicket,
    clearTickets,
    reset
} from 'src/components/ticket/actions';
import generateTicket from 'src/generator/ticketGenerator'

import './ControlPanel.css';

const ControlPanel = ({ addTicket, clearTickets, resetToDefault }) => 
<div className='control-panel'>
    <button onClick={addTicket}>add ticket to inbox</button>
    <button onClick={resetToDefault}>reset to defult</button>
    <button onClick={clearTickets}>clear all tickets</button>

</div>;

export default connect((state) => ({}),
(dispatch) => ({
    addTicket: () => dispatch(addTicket(generateTicket())),
    clearTickets: () => dispatch(clearTickets()),
    resetToDefault: () => dispatch(reset())
}))(ControlPanel);