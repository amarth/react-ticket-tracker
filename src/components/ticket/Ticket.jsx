import React from 'react';

import './Ticket.css';

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
            isSelected
        } = this.props;

        return (<div className={`ticket ${type.toLowerCase()} ${isSelected ? 'selected' : ''}`}  onClick={onClick}>
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

export default Ticket;