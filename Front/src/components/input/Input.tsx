import React, { FC, useState } from 'react'
import { useField } from 'formik'
import { ICustomInput } from './interfaces'
import {
    InputWrapper,
    IconWrrapper,
    ErrorLabel,
    Label,
    InputContainer,
} from './style'

const CustomInput: FC<ICustomInput> = ({
    onChange,
    onBlur,
    suffix = { icon: undefined, callback: undefined },
    placeholder,
    ...prop
}) => {
    const [field, meta] = useField(prop)
    const { touched } = meta
    const errors = touched && meta.error

    const [isFocus, setIsFocus] = useState(false)

    const {
        icon: SuffixIcon,
        own: suffixOwn,
        callback: suffixCallback,
    } = suffix

    const props = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e),
        onFocus: () => {
            setIsFocus(true)
        },
        className: `input_body ${errors ? 'error' : ''} ${
            isFocus || prop.value ? 'is_value' : ''
        } `,
        ...prop,
    }

    return (
        <InputContainer>
            <InputWrapper className='input_wrapper'>
                <input
                    {...field}
                    {...props}
                    onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                        field.onBlur(e)
                        onBlur?.(e)
                        setIsFocus(false)
                    }}
                    id={`id_input_${props.name}`}
                />
                <Label
                    className={`input_label ${
                        isFocus || prop.value ? 'is_focus' : ''
                    } ${errors ? 'error' : ''}`}
                >
                    {placeholder}
                </Label>
                {SuffixIcon && !suffixOwn && (
                    <IconWrrapper onClick={() => suffixCallback?.()}>
                        <SuffixIcon
                            id={`id_for_test_${props.name}`}
                            className="input_suffix_icon"
                        />
                    </IconWrrapper>
                )}
                {SuffixIcon && suffixOwn ? SuffixIcon : null}
            </InputWrapper>
            {errors && (
                <ErrorLabel className='input_error_label'>{errors}</ErrorLabel>
            )}
        </InputContainer>
    )
}

export default CustomInput
