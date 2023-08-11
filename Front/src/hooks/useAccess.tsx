import { useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { getCookiesAccessToken } from 'utils/token'

const useAccess = () => {
    const accessToken = getCookiesAccessToken()
    const { user } = useSelector(({ authorization }: RootState) => ({
        user: authorization.authorization,
    }))
    const access = !!(accessToken || user)
    return access
}

export default useAccess
