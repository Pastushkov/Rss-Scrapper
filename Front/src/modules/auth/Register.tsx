import React, { FC, useEffect } from 'react'
import { Form, Formik } from 'formik'
import CustomInput from 'components/input/Input'
import Button from 'components/button'
import { registerSchema } from 'config/schema'
import { useHistory } from 'react-router-dom'
import { PATH_ALL } from 'config/path'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'redux/reducers/rootReducer'
import { ButtonWrapper } from 'style/general'
import { Bottom, Header, Line, Wrapper } from './style'
import { initialValues } from './config'
import { fetchRegisterAction } from './store/actions'

const Register: FC = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { registerSuccess } = useSelector(({ authorization }: RootState) => ({
        registerSuccess: authorization.registerSuccess,
    }))

    useEffect(() => {
        if (registerSuccess) {
            history.push(PATH_ALL.sign_in)
        }
    }, [registerSuccess])

    return (
        <Wrapper>
            <Header>Register</Header>
            <Formik
                initialValues={initialValues}
                onSubmit={values => {
                    console.log('SUbmit', values)
                    dispatch(fetchRegisterAction(values))
                }}
                validationSchema={registerSchema}
            >
                {props => {
                    const { values, handleChange, dirty, isValid } = props

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

                            <CustomInput
                                name='name'
                                placeholder='name'
                                onChange={handleChange}
                                value={values.name}
                            />

                            <ButtonWrapper>
                                <Button
                                    type='submit'
                                    disabled={!dirty || !isValid}
                                >
                                    OK
                                </Button>
                            </ButtonWrapper>
                        </Form>
                    )
                }}
            </Formik>
            <Bottom>
                Already have account?{' '}
                <Button onClick={() => history.push(PATH_ALL.sign_in)}>
                    Sing in
                </Button>
            </Bottom>
        </Wrapper>
    )
}

export default Register
