import React, { FC } from 'react'
import { CustomModal } from 'components/modal/Modal'
import { ButtonWrapper } from 'style/general'
import Button from 'components/button'
import { useDispatch } from 'react-redux'
import { fetchDeleteArticleByIdAction } from 'modules/articles/store/actions'

interface IProps {
    open: boolean
    setOpen: ({ open, id }: { open: boolean; id: string }) => void
    id: string
}

const DeleteArticleModal: FC<IProps> = ({ open, setOpen, id }) => {
    const dispatch = useDispatch()
    const handleClose = () => {
        setOpen({ open: false, id: '' })
    }

    const handleDelete = () => {
        dispatch(fetchDeleteArticleByIdAction(id))
        handleClose()
    }

    return (
        <CustomModal
            open={open}
            dropCallback={handleClose}
            label='Delete article'
        >
            <div>
                <div>Are you sure to delete article with ID # {id}?</div>
                <ButtonWrapper>
                    <Button onClick={handleDelete}>Delete</Button>
                    <Button onClick={handleClose}>Cancle</Button>
                </ButtonWrapper>
            </div>
        </CustomModal>
    )
}

export default DeleteArticleModal
