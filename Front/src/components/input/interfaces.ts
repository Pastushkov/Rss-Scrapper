import { ChangeEvent } from 'react'

interface IIcon {
    icon: any
    callback?: () => void
    own?: boolean
}

export interface ICustomInpuBase {
    id?: string
    name: string
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
    onBlur?: (e: ChangeEvent<HTMLInputElement>) => void
    value?: string | number
    disabled?: boolean
    placeholder: string
    errors?: any
    field?: any
    error?: any
}

export interface ICustomInput extends ICustomInpuBase {
    suffix?: IIcon
    type?: 'text' | 'number' | 'email' | 'password'
}

export type ICustomInputPassword = ICustomInpuBase
