export interface IValues {
    title: string
    description: string
    link: string
    pubDate: string
    category: string
    source: string
    media?: string
}

export const startValues: IValues = {
    title: '',
    description: '',
    link: '',
    pubDate: '',
    category: '',
    source: '',
    media: '',
}

export const generateCategoty = (category: string) => {
    let parseString = category
    if (category.endsWith(';')) {
        parseString = category.slice(0, -1)
    }
    const categories = new Set<string>()

    parseString.split(';').forEach(item => {
        categories.add(item)
    })

    return Array.from(categories)
}
