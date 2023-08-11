import React, { FC, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { Loader } from 'components/loader/Loader'
import usePagination from 'hooks/usePagination'
import { fetchArticlesListAction } from './store/actions'
import ArticleList from './parts/ArticleList'
import { Wrapper } from './style'
import ArticleFilters from './parts/ArticleFilters'
import { dateFormater } from './config'

const Article: FC = () => {
    const [filter, setFilters] = useState<any>({})

    const dispatch = useDispatch()
    const { list, total, isLoading } = useSelector(
        ({ articles }: RootState) => ({
            list: articles.list,
            total: articles.total,
            isLoading: articles.isLoading,
        }),
    )

    const { limit, offset, pagination } = usePagination({
        total,
    })

    useEffect(() => {
        dispatch(fetchArticlesListAction({ limit, offset, ...filter }))
    }, [limit, offset, filter, dispatch])

    const parsedList = useMemo(
        () =>
            list?.map(({ pubDate, ...item }) => ({
                ...item,
                pubDate: dateFormater(pubDate),
            })) ?? [],
        [list],
    )

    return (
        <Wrapper>
            <ArticleFilters setFilters={setFilters} />
            <Loader isLoading={isLoading}>
                <ArticleList list={parsedList} />
                {pagination}
            </Loader>
        </Wrapper>
    )
}

export default Article
