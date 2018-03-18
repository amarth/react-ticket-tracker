import React from 'react';

import './Ticket.css';

const Details = ({content}) => 
    <div>{content}</div>;

class Ticket extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showDetails: false };
    }

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
        const { showDetails } = this.state;

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
                    {description}
                </div>
                { showDetails && <Details content={description} /> }
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