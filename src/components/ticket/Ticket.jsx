import React from 'react';
import { DragSource } from 'react-dnd';

import './Ticket.css';


export const ItemTypes = {
    TICKET: 'ticket'
};

const ticketSource = {
    beginDrag(props) {
        return {ticketId: props.id, ticketStatus: props.status };
    }
};

function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

class Ticket extends React.Component {
    render() {
        const { 
            id,
            type,
            title,
            description,
            moveLeft, 
            moveRight,
            onClick,
            isSelected,
            connectDragSource, 
            isDragging
        } = this.props;

        return connectDragSource(<div style={{opacity: isDragging ? 0.75 : 1 }} className={`ticket ${type.toLowerCase()} ${isSelected ? 'selected' : ''}`}  onClick={onClick}>
            { moveLeft && 
                <div className='ticket-move-left' 
                    onClick={e => {
                        moveLeft(e);
                        e.stopPropagation();
                    }
                } /> }
            <div className='ticket-content'>
                <span className='ticket-id'>#{id}</span>
                <div className='ticket-title'>{title}</div>
                <div className='ticket-description'>
                    <p ref={ref => this._description = ref}>{description}</p>
                </div>
            </div>
            { moveRight && 
                <div className='ticket-move-right' 
                    onClick={e => { 
                        moveRight(e);
                        e.stopPropagation();
                    }
                } /> }
        </div>);
    }
}

export default DragSource(ItemTypes.TICKET, ticketSource, collect)(Ticket);