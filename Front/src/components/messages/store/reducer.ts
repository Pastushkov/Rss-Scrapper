import { messageTypes } from './actionTypes'
import { MessagesState, MessageActions } from './types'

const initialState: MessagesState = {
    message: '',
    type: '',
}

export default (
    state = initialState,
    action: MessageActions,
): MessagesState => {
    switch (action.type) {
        case messageTypes.SET_MESSAGE_TOAST:
            return {
                ...state,
                message: action.payload.message,
                type: action.payload.type,
            }
        case messageTypes.DROP_MESSAGE_TOAST:
            return {
                ...state,
                message: '',
                type: '',
            }
        default:
            return {
                ...state,
            }
    }
}
