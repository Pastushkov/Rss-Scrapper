import { combineReducers } from 'redux'
import authorizationReducer from 'modules/auth/store/reducer'
import messageReducer from 'components/messages/store/reducer'
import articleReducer from 'modules/articles/store/reducer'

const rootReducer = combineReducers({
    authorization: authorizationReducer,
    messages: messageReducer,
    articles: articleReducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
