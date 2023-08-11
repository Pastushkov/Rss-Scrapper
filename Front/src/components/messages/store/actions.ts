import { messageTypes } from './actionTypes'
import { DropMessage, SetMessage } from './types'

export const setMessageAction = (
    payload: SetMessage['payload'],
): SetMessage => ({
    type: messageTypes.SET_MESSAGE_TOAST,
    payload,
})
export const dromMessageAction = (): DropMessage => ({
    type: messageTypes.DROP_MESSAGE_TOAST,
})
