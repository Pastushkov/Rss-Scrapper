import { Form, Formik } from 'formik'
import React, { FC, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { CustomOptionsSelectInput } from 'components/select/list/widthInput'
import { ButtonWrapper } from 'style/general'
import Button from 'components/button'
import CustomInput from 'components/input/Input'
import CustomSelect from 'components/select/Select'
import { Loader } from 'components/loader/Loader'
import {
    fetchCategoryListAction,
    fetchSourceListAction,
} from '../store/actions'
import { FormWrapper } from '../style'
import { sortoptions } from '../config'

interface IProps {
    setFilters: (value: any) => void
}
const ArticleFilters: FC<IProps> = ({ setFilters }) => {
    const dispatch = useDispatch()

    const { categories, isLoadigCategory, sourceList, isLoadigSource } =
        useSelector(({ articles }: RootState) => ({
            categories: articles.categories,
            isLoadigCategory: articles.isLoadigCategory,
            sourceList: articles.sourceList,
            isLoadigSource: articles.isLoadigSource,
        }))

    useEffect(() => {
        dispatch(fetchCategoryListAction())
        dispatch(fetchSourceListAction())
    }, [])

    const categoryOptions = useMemo(
        () =>
            categories?.map(item => ({
                label: `${item}`,
                value: `${item}`,
            })),
        [categories],
    )

    const sourceOptions = useMemo(
        () =>
            sourceList?.map(item => ({
                label: `${item}`,
                value: `${item}`,
            })) ?? [],
        [sourceList],
    )

    return (
        <Loader isLoading={isLoadigCategory || isLoadigSource}>
            <Formik
                initialValues={{
                    category: '',
                    search: '',
                    source: '',
                    sortBy: '',
                }}
                enableReinitialize
                onSubmit={values => {
                    setFilters({
                        ...values,
                    })
                }}
            >
                {props => {
                    const { values, setFieldValue, handleChange } = props
                    return (
                        <Form>
                            <FormWrapper>
                                <CustomInput
                                    name='search'
                                    value={values.search}
                                    placeholder='search'
                                    onChange={handleChange}
                                />

                                <CustomOptionsSelectInput
                                    value={values.category}
                                    label='category'
                                    name='category'
                                    setFieldValue={(field, value) => {
                                        setFieldValue(field, value)
                                    }}
                                    options={categoryOptions}
                                />

                                <CustomSelect
                                    label='source'
                                    name='source'
                                    options={sourceOptions}
                                    setFieldValue={setFieldValue}
                                    defaultValueFirst
                                />
                                <CustomSelect
                                    label='sort by'
                                    name='sortBy'
                                    options={sortoptions}
                                    setFieldValue={setFieldValue}
                                    defaultValueFirst
                                />

                                <ButtonWrapper>
                                    <Button type='submit'>Search</Button>
                                </ButtonWrapper>
                            </FormWrapper>
                        </Form>
                    )
                }}
            </Formik>
        </Loader>
    )
}

export default ArticleFilters
