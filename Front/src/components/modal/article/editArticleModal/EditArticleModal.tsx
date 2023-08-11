import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import {
    fetchArticleByIdAction,
    fetchEditArticleById,
} from 'modules/articles/store/actions'
import { Form, Formik } from 'formik'
import { createArticleSchema } from 'config/schema'
import { ButtonWrapper, Line } from 'style/general'
import CustomInput from 'components/input/Input'
import { TextArea } from 'components/input/textArea/TextArea'
import Button from 'components/button'
import DatePicker from 'react-datepicker'
import { IValues, generateCategoty, startValues } from '../config'
import { CustomModal } from '../../Modal'
import { DatePickerWrapper } from '../createArticleModal/style'
import 'react-datepicker/dist/react-datepicker.css'

interface IProps {
    open: boolean
    setOpen: ({ open, id }: { open: boolean; id: string }) => void
    id: string
}

const EditArticleModal: FC<IProps> = ({ open, setOpen, id }) => {
    const dispatch = useDispatch()

    const [initialValues, setInitialValues] = useState<IValues>(startValues)

    const { selectedArticle, isLaoding } = useSelector(
        ({ articles }: RootState) => ({
            selectedArticle: articles.selectedArticle,
            isLaoding: articles.isLoadingSelectedArticle,
        }),
    )
    const handleClose = () => {
        setOpen({ open: false, id: '' })
    }

    useEffect(() => {
        if (id) dispatch(fetchArticleByIdAction(id))
    }, [id])

    useEffect(() => {
        setInitialValues({
            title: selectedArticle?.title ?? '',
            description: selectedArticle?.description ?? '',
            category: selectedArticle?.category?.join(';') ?? '',
            link: selectedArticle?.link ?? '',
            source: selectedArticle?.source ?? '',
            media: selectedArticle?.media ?? '',
            pubDate: selectedArticle?.pubDate ?? '',
        })
    }, [selectedArticle])

    return (
        <CustomModal
            open={open}
            dropCallback={handleClose}
            label={`Edit article #${id}`}
            loading={isLaoding}
        >
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    dispatch(
                        fetchEditArticleById({
                            _id: id,
                            ...values,
                            category: generateCategoty(values.category),
                            pubDate: values.pubDate.toString(),
                        }),
                    )
                    handleClose()
                }}
                validationSchema={createArticleSchema}
                enableReinitialize
            >
                {props => {
                    const {
                        values,
                        handleChange,
                        dirty,
                        isValid,
                        setFieldValue,
                    } = props

                    return (
                        <Form>
                            <Line>
                                <CustomInput
                                    name='title'
                                    placeholder='title'
                                    onChange={handleChange}
                                    value={values.title}
                                />
                                <CustomInput
                                    name='link'
                                    placeholder='link'
                                    onChange={handleChange}
                                    value={values.link}
                                />
                            </Line>
                            <Line>
                                <TextArea
                                    name='description'
                                    placeholder='description'
                                    onChange={handleChange}
                                    value={values.description}
                                />
                            </Line>
                            <Line>
                                <CustomInput
                                    name='category'
                                    placeholder='category'
                                    onChange={handleChange}
                                    value={values.category}
                                />
                            </Line>
                            <Line>
                                <DatePickerWrapper>
                                    <DatePicker
                                        className='calendar'
                                        selected={new Date()}
                                        onChange={date => {
                                            if (date) {
                                                // setSelectedDate(date)
                                                setFieldValue(
                                                    'pubDate',
                                                    date.toISOString(),
                                                )
                                            }
                                        }}
                                    />
                                </DatePickerWrapper>

                                <CustomInput
                                    name='source'
                                    placeholder='source'
                                    onChange={handleChange}
                                    value={values.source}
                                />
                            </Line>

                            <Line>
                                <CustomInput
                                    name='media'
                                    placeholder='media'
                                    onChange={handleChange}
                                    value={values.media}
                                />
                            </Line>
                            <ButtonWrapper>
                                <Button
                                    type='submit'
                                    disabled={!dirty || !isValid}
                                >
                                    Edit
                                </Button>
                                <Button type='button' onClick={handleClose}>
                                    Cancle
                                </Button>
                            </ButtonWrapper>
                        </Form>
                    )
                }}
            </Formik>
        </CustomModal>
    )
}
export default EditArticleModal
