import React, { FC, useState } from 'react'
import { Form, Formik } from 'formik'
import { ButtonWrapper, Line } from 'style/general'
import CustomInput from 'components/input/Input'
import { TextArea } from 'components/input/textArea/TextArea'
import Button from 'components/button'
import { createArticleSchema } from 'config/schema'
import { useDispatch } from 'react-redux'
import { fetchCreateArticleAction } from 'modules/articles/store/actions'
import DatePicker from 'react-datepicker'
import { CustomModal } from '../../Modal'
import { generateCategoty, startValues } from '../config'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerWrapper } from './style'

interface IProps {
    open: boolean
    setOpen: (value: boolean) => void
}

const CreateArticleModal: FC<IProps> = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false)
    }
    const [selectedDate, setSelectedDate] = useState(new Date())

    const dispatch = useDispatch()

    return (
        <CustomModal
            open={open}
            dropCallback={handleClose}
            label='Create Article'
        >
            <Formik
                initialValues={startValues}
                onSubmit={values => {
                  

                    dispatch(
                        fetchCreateArticleAction({
                            ...values,
                            category: generateCategoty(
                                values.category.trimEnd(),
                            ),
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
                                        selected={selectedDate}
                                        onChange={date => {
                                            if (date) {
                                                setSelectedDate(date)
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
                                    Create
                                </Button>
                                <Button onClick={handleClose}>Cancle</Button>
                            </ButtonWrapper>
                        </Form>
                    )
                }}
            </Formik>
        </CustomModal>
    )
}

export default CreateArticleModal
