import React, { FC, useState } from 'react'
import { DeleteIcon, EditIcon, PlusIcon } from 'assets/images/svgs'
import DeleteArticleModal from 'components/modal/article/deleteArticleModal/DeleteArticleModal'
import CreateArticleModal from 'components/modal/article/createArticleModal/CreateArticleModal'
import useAccess from 'hooks/useAccess'
import EditArticleModal from 'components/modal/article/editArticleModal/EditArticleModal'
import { Article, Cover, ListHead, Panel } from '../style'
import { IArticle } from '../store/types'

interface IProps {
    list: IArticle[]
}

const ArticleList: FC<IProps> = ({ list }) => {
    const access = useAccess()

    const [openDeleteModal, setOpenDeleteModal] = useState<{
        open: boolean
        id: string
    }>({ open: false, id: '' })
    const [openCreateModal, setOpenCreateModal] = useState(false)
    const [openEditModal, setOpenEditModal] = useState<{
        open: boolean
        id: string
    }>({ open: false, id: '' })

    if (list.length === 0) return <div>No Data</div>
    return (
        <div>
            <ListHead>
                Articles{' '}
                {access && (
                    <PlusIcon
                        className='icon'
                        onClick={() => setOpenCreateModal(true)}
                    />
                )}
            </ListHead>

            <Cover>
                {list.map(
                    ({
                        title,
                        description,
                        source,
                        pubDate,
                        link,
                        media,
                        _id,
                    }) => (
                        <div className='list' key={_id}>
                            <Article>
                                <div>#{_id}</div>
                                <div className='title'>
                                    {media && (
                                        <img
                                            className='image'
                                            src={media}
                                            alt='content_media'
                                        />
                                    )}
                                    {title}
                                </div>
                                <div className='description'>{description}</div>
                                <div className='bottom'>
                                    <div className='source'>{source}</div>
                                    <div className='pubDate'>{pubDate}</div>

                                    <a
                                        className='link'
                                        href={link}
                                        target='_blank'
                                        rel='noreferrer'
                                    >
                                        visit
                                    </a>
                                </div>
                            </Article>
                            {access && (
                                <Panel>
                                    <EditIcon
                                        onClick={() =>
                                            setOpenEditModal({
                                                open: true,
                                                id: _id,
                                            })
                                        }
                                        className='icon'
                                    />
                                    <DeleteIcon
                                        className='icon'
                                        onClick={() =>
                                            setOpenDeleteModal({
                                                open: true,
                                                id: _id,
                                            })
                                        }
                                    />
                                </Panel>
                            )}
                        </div>
                    ),
                )}
                <DeleteArticleModal
                    open={openDeleteModal.open}
                    setOpen={setOpenDeleteModal}
                    id={openDeleteModal.id}
                />
                <CreateArticleModal
                    open={openCreateModal}
                    setOpen={setOpenCreateModal}
                />
                <EditArticleModal
                    open={openEditModal.open}
                    setOpen={setOpenEditModal}
                    id={openEditModal.id}
                />
            </Cover>
        </div>
    )
}

export default ArticleList
