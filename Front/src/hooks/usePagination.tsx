import React, { FC, useState } from 'react'
import { useConfigPagination } from './config'
import { Item, PaginationWrapper } from './style'

interface IProps {
    total: number
}

const DEFAULT_LIMIT = 10

interface IPagination {
    currentPage: number
    pageSize: number
    total: number
    onPageChange: (page: number) => void
}

const Pagination: FC<IPagination> = ({
    onPageChange,
    currentPage,
    pageSize,
    total,
}) => {
    const paginationRange: any = useConfigPagination({
        currentPage,
        pageSize,
        totalCount: total,
    })

    return (
        <PaginationWrapper>
            {paginationRange &&
                Array.isArray(paginationRange) &&
                paginationRange?.map(
                    (pageNumber: number | string, ind: number) => {
                        if (pageNumber === '...') {
                            const pageNumberDot =
                                paginationRange[ind - 2] + 2 ||
                                paginationRange[ind + 2] - 2
                            const i = ind
                            return (
                                <Item
                                    key={`pageNumber_${i}`}
                                    onClick={() =>
                                        onPageChange(pageNumberDot as number)
                                    }
                                >
                                    {pageNumber}
                                </Item>
                            )
                        }
                        return (
                            <Item
                                key={pageNumber}
                                className={`${
                                    pageNumber === currentPage ? 'active' : ''
                                }`}
                                onClick={() =>
                                    onPageChange(pageNumber as number)
                                }
                            >
                                {pageNumber}
                            </Item>
                        )
                    },
                )}
        </PaginationWrapper>
    )
}

const usePagination = ({ total }: IProps) => {
    const [activePage, setActivePage] = useState(1)

    return {
        limit: DEFAULT_LIMIT,
        offset: (activePage - 1) * DEFAULT_LIMIT,
        pagination: (
            <Pagination
                currentPage={activePage}
                pageSize={DEFAULT_LIMIT}
                total={total}
                onPageChange={page => setActivePage(page)}
            />
        ),
    }
}

export default usePagination
