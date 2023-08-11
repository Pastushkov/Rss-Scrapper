import React, { FC } from 'react'
import { removeToken } from 'utils/token'
import { LogoutIcon } from 'assets/images/svgs'
import { useDispatch } from 'react-redux'
import { SetAuthorizationAction } from 'modules/auth/store/actions'
import { setMessageAction } from 'components/messages/store/actions'
import useAccess from 'hooks/useAccess'
import { FooterWrapper, Logout } from './style'

const Footer: FC = () => {
    const dispatch = useDispatch()

    const access = useAccess()

    const logout = () => {
        removeToken()
        dispatch(
            SetAuthorizationAction({
                authorization: null,
            }),
        )
        dispatch(
            setMessageAction({
                message: 'Logout succes',
                type: 'success',
            }),
        )
    }

    return (
        <FooterWrapper>
            {access && (
                <Logout onClick={logout}>
                    Logout
                    <div>
                        <LogoutIcon className='icon' />
                    </div>
                </Logout>
            )}
        </FooterWrapper>
    )
}

export default Footer
