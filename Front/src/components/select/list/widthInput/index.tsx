import { SelectArrow } from 'assets/images/svgs'
import React, { FC, useEffect, useMemo, useState } from 'react'
import { colors } from 'style/colors'
import CustomInput from 'components/input/Input'
import { IOption, IFormikSelect } from '../../interfaces'
import { List } from '../List'
import { IconWrapper, SelectWrapper } from '../../style'

const initialSelect = { label: '-', value: '' }
export const CustomOptionsSelectInput: FC<IFormikSelect> = ({
    label,
    name,
    value,
    setFieldValue,
    options,
}) => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState(initialSelect)
    const [search, setSearch] = useState(options as IOption[])

    const filteredOptions = useMemo(() => {
        return [initialSelect, ...options] as IOption[]
    }, [options])

    useEffect(() => {
        if (!isOpen)
            setInput(
                (options as IOption[])?.find(({ value: v }) => value === v) ??
                    (options as IOption[])?.find(({ value: v }) => v === '') ??
                    initialSelect,
            )
    }, [value, options, isOpen])

    useEffect(() => {
        setSearch(filteredOptions)
    }, [isOpen])

    const handleClick = ({ value: v }: IOption) => {
        setIsOpen(false)
        setFieldValue(name, v)
    }

    const handleInput = (e: any) => {
        if (isOpen) {
            setInput({ label: e.target.value, value: '' })
        }
        setIsOpen(true)
        setSearch(
            filteredOptions?.filter(item =>
                item.label.toLowerCase().includes(e.target.value.toLowerCase()),
            ),
        )
    }

    return (
        <SelectWrapper
            className='mode-input'
            isOpen={isOpen}
            onClick={() => {
                setIsOpen(!isOpen)
            }}
        >
            <CustomInput
                onBlur={() => {
                    setIsOpen(false)
                }}
                name={name}
                placeholder={label}
                value={input.label}
                onChange={handleInput}
                suffix={{
                    icon: (
                        <IconWrapper className='mode-input' isOpen={isOpen}>
                            <SelectArrow fill={colors.grey} />
                        </IconWrapper>
                    ),
                    own: true,
                }}
            />
            {isOpen && <List onChange={handleClick} options={search} />}
        </SelectWrapper>
    )
}
