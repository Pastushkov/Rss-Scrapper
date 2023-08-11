import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'

const ONE_SECOND_IN_MILISECONDS = 1000

export const setToken: (token: string) => void = (token: string) => {
    try {
        const { exp } = jwtDecode<{ exp: number }>(token)
        Cookies.set('token', JSON.stringify(token), {
            expires: new Date(exp * ONE_SECOND_IN_MILISECONDS),
        })
    } catch (e) {
        console.error(e)
    }
}

export const getCookiesAccessToken: () => string | undefined = () => {
    const token = JSON.parse(Cookies.get('token') || '""')
    if (!token) return undefined
    return token
}

export const removeToken: () => void = () => {
    Cookies.remove('token')
}
