import { SelectArrow } from 'assets/images/svgs'
import { useField } from 'formik'
import React, { FC, useEffect, useState } from 'react'
import { colors } from 'style/colors'
import { IOption, IFormikSelect } from './interfaces'
import { List } from './list/List'
import {
    ErrorSelect,
    IconWrapper,
    SelectBodyWrapper,
    SelectLabel,
    SelectText,
    SelectWrapper,
    SelectWrapperBox,
} from './style'

const initialSelect = { label: '-', value: '' }

const CustomSelect: FC<IFormikSelect> = ({
    id,
    label,
    name,
    value,
    setFieldValue,
    options,
    emptyField,
    defaultValueFirst,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [defaultValue, setDefaultValue] = useState(initialSelect)
    const [field, meta] = useField(name)
    const [optionsList, setOptionsList] = useState(options)

    useEffect(() => {
        if (emptyField) {
            setOptionsList([initialSelect, ...options])
        }
    }, [options, emptyField])

    useEffect(() => {
        setDefaultValue(
            (options as IOption[])?.find(({ value: v }: any) => value === v) ??
                (options as IOption[])?.find(
                    ({ value: v }: any) => v === '',
                ) ?? {
                    label: '-',
                    value: '',
                },
        )
    }, [value, options])

    useEffect(() => {
        if (defaultValueFirst) {
            setDefaultValue((options as IOption[])[0])
            setFieldValue(name, options[0]?.value)
        }
    }, [defaultValueFirst, options])

    const handleClick = ({ label: l, value: v }: IOption) => {
        setDefaultValue({ label: l, value: v })
        setFieldValue(name, v, true)
        setIsOpen(false)
    }

    return (
        <SelectWrapperBox>
            <SelectWrapper
                isOpen={isOpen}
                tabIndex={0}
                onBlur={() => {
                    field.onBlur({ target: { name } })
                    setIsOpen(false)
                }}
                onClick={(e: any) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }}
                id={id ?? `${field.name}`}
                className={
                    meta.error && meta.touched
                        ? 'error SelectWrapper'
                        : 'SelectWrapper'
                }
            >
                <SelectLabel
                    className={meta.error && meta.touched ? 'error' : ''}
                >
                    {label}
                </SelectLabel>
                <SelectBodyWrapper>
                    <SelectText>{defaultValue?.label}</SelectText>
                    <IconWrapper isOpen={isOpen}>
                        <SelectArrow fill={colors.grey} />
                    </IconWrapper>
                </SelectBodyWrapper>
                {isOpen && (
                    <List onChange={handleClick} options={optionsList} />
                )}
            </SelectWrapper>
            {meta.error && meta.touched && (
                <ErrorSelect>{meta.error}</ErrorSelect>
            )}
        </SelectWrapperBox>
    )
}

export default CustomSelect
