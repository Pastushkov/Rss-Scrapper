import { messageTypes } from './actionTypes'

export interface MessagesState {
    message: string
    type: 'success' | 'error' | ''
}

export interface SetMessage {
    type: typeof messageTypes.SET_MESSAGE_TOAST
    payload: {
        message: string
        type: 'success' | 'error'
    }
}

export interface DropMessage {
    type: typeof messageTypes.DROP_MESSAGE_TOAST
}

export type MessageActions = SetMessage | DropMessage
