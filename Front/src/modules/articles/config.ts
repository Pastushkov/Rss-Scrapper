import { IOption } from 'components/select/interfaces'

export const dateFormater = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getUTCDate()
    const month = date.getUTCMonth() + 1
    const year = date.getUTCFullYear()
    const hours = date.getUTCHours()
    const minutes = date.getUTCMinutes()

    return `${day}/${month}/${year} ${hours}:${minutes}`
}

export const sortoptions: IOption[] = [
    {
        label: 'asc',
        value: 'asc',
    },
    {
        label: 'desc',
        value: 'desc',
    },
]
