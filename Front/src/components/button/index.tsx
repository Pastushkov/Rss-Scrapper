import React, { FC } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { colors } from '../../style/colors'
import { ButtonProps } from './interfaces'
import { CustomButton } from './style'

const Button: FC<ButtonProps> = ({
    loading,
    children,
    ...props
}: ButtonProps) => (
    <CustomButton className='button_wrapper' {...props}>
        {children}
        {loading ? (
            <ClipLoader
                size={15}
                color={colors.white}
                cssOverride={{ marginLeft: '8px' }}
            />
        ) : null}
    </CustomButton>
)

Button.defaultProps = {
    type: 'button',
    loading: false,
    disabled: false,
    onClick: undefined,
}

export default Button
