import properties from './properties';
import { defaultState, emptyState } from './defaults'


const mergeArray = (state, prop, value) => {
    return {
        [prop]: [...state[prop], value]
    };
}

export default  (state, action) => {
    let nextState = state;
    const { value } = action;

    switch(action.type) {
        case 'RESET':
            nextState = defaultState;
            break;
        case 'CLEAR_TICKETS':
            nextState = emptyState;
            break;
        case 'ADD_TICKET':
            nextState = {
                ...state,
                [properties.TICKETS]: {
                    ...state[properties.TICKETS],
                     [value.id]: value
                },
                ...mergeArray(state, properties.INPUT_TICKETS, action.value.id),
            };
            break;
        case 'UPDATE_TICKET':
            nextState = {
                ...state,
                [properties.TICKETS]: {
                    ...state[properties.TICKETS],
                     [value.id]: value
                }
            };
            break;
        case 'MOVE_TICKET':
            const { toStatus, fromStatus } = action;
            nextState = {
                ...state,
                [fromStatus]: state[fromStatus].filter(id => id !== value.id),
                [toStatus]: [value.id, ...state[toStatus]]     
            };
            break;
        default:
    }

    // console.dir(nextState);
    (nextState !== state) && window.localStorage.setItem("ticket-grid", JSON.stringify(nextState));

    return nextState;
};