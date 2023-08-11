export interface IsSelectOpen {
    isOpen: boolean
    onBlur?: any
    disabled?: boolean
}

export interface IOption {
    label: string
    value: string
}
export interface ISelectProps {
    options: IOption[]
    onChange: (item: IOption) => void
    section?: { title: string; filterFunc: any; active: boolean }[]
}

export interface IFormikSelect {
    id?: string
    options: IOption[]
    label: string
    name: string
    value?: string
    setFieldValue: (field: string, value: any, click?: boolean) => void
    emptyField?: boolean
    defaultValueFirst?: boolean
}
