import React, { FC, useEffect } from 'react'
import { Form, Formik } from 'formik'
import CustomInput from 'components/input/Input'
import Button from 'components/button'
import { loginSchema } from 'config/schema'
import { useHistory } from 'react-router-dom'
import { PATH_ALL } from 'config/path'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { ButtonWrapper } from 'style/general'
import { Bottom, Header, Line, Wrapper } from './style'
import { AuthInitialvValues as initialValues } from './config'
import { fetchAuthorizationAction } from './store/actions'

const SignInPage: FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { isAuthorization } = useSelector(({ authorization }: RootState) => ({
        isAuthorization: authorization.authorization,
    }))

    useEffect(() => {
        if (isAuthorization) {
            history.push(PATH_ALL.articles)
        }
    }, [isAuthorization])

    return (
        <Wrapper>
            <Header>Sing in</Header>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    console.log('SUbmit', values)
                    dispatch(fetchAuthorizationAction(values))
                }}
                validationSchema={loginSchema}
            >
                {props => {
                    const { values, handleChange } = props

                    return (
                        <Form>
                            <Line>
                                <div>
                                    <CustomInput
                                        name='email'
                                        placeholder='email'
                                        onChange={handleChange}
                                        value={values.email}
                                    />
                                </div>
                                <div>
                                    <CustomInput
                                        name='password'
                                        placeholder='password'
                                        onChange={handleChange}
                                        value={values.password}
                                        type='password'
                                    />
                                </div>
                            </Line>
                            <ButtonWrapper>
                                <Button type='submit'>OK</Button>
                            </ButtonWrapper>
                        </Form>
                    )
                }}
            </Formik>
            <Bottom>
                Dont have account?{' '}
                <Button onClick={() => history.push(PATH_ALL.register)}>
                    Register
                </Button>
            </Bottom>
        </Wrapper>
    )
}

export default SignInPage
