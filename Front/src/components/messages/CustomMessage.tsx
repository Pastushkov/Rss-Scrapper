import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { ErrorMessageIcon, SuccessMessageIcon } from 'assets/images/svgs'
import { Toast } from './style'
import { dromMessageAction } from './store/actions'

const CustomMessage: FC = () => {
    const { message, type } = useSelector(({ messages }: RootState) => ({
        message: messages.message,
        type: messages.type,
    }))
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(dromMessageAction())
    }

    useEffect(() => {
        if (message) {
            setTimeout(handleClose, 5000)
        }
    }, [message])

    return message ? (
        <Toast type={type} onClick={handleClose}>
            {' '}
            {type === 'error' ? (
                <ErrorMessageIcon />
            ) : (
                <SuccessMessageIcon />
            )}{' '}
            {message}
        </Toast>
    ) : (
        <div />
    )
}
export default CustomMessage
