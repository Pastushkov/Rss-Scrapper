import { ArticleRoutes } from './ArticleRoutes'
import { AuthRoutes } from './AuthRoutes'
import { RegisterRoutes } from './RegisterRoutes'

export default [
    ...AuthRoutes,
    ...ArticleRoutes,
    ...RegisterRoutes
]
