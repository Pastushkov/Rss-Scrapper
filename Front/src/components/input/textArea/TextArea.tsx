import React, { FC, useRef, useState } from 'react'
import { useField } from 'formik'
import { ICustomInput } from '../interfaces'
import { ErrorLabel, Label } from '../style'
import { TextAreaWrapper } from './style'

export const TextArea: FC<ICustomInput> = ({
    onChange,
    onBlur,
    placeholder,
    ...prop
}) => {
    const ref = useRef() as any
    const [isFocus, setIsFocus] = useState(false)
    const [field, meta] = useField({ ...prop, autoComplete: '' })
    const { touched } = meta
    const errors = touched && meta.error

    const props: any = {
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => onChange?.(e),
        onFocus: () => {
            setIsFocus(true)
        },
        className: `textarea_body ${errors ? 'textarea_error' : ''} ${
            prop.value ? 'is_value' : ''
        }`,
        ...prop,
    }

    return (
        <TextAreaWrapper
            height={ref?.current?.scrollHeight}
            className='textarea_wrapper'
        >
            <textarea
                ref={ref}
                {...field}
                {...props}
                onBlur={(e: React.ChangeEvent<HTMLInputElement>) => {
                    field.onBlur(e)
                    onBlur?.(e)
                    setIsFocus(false)
                }}
            />
            <Label
                className={`aria input_label ${
                    isFocus || props.value ? 'is_focus' : ''
                } ${errors ? 'error' : ''}`}
            >
                {placeholder}
            </Label>

            {errors && (
                <ErrorLabel className='textarea_error_label'>
                    {meta.error}
                </ErrorLabel>
            )}
        </TextAreaWrapper>
    )
}
