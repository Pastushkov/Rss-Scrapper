import React from 'react'
import { useHistory } from 'react-router-dom'
import { Wrapper, InnerWrapper, Title52Bold } from './style'

const NotFoundPage = () => {
    const history = useHistory()
    setTimeout(() => history.push('/'), 5000)

    return (
        <Wrapper>
            <div>
                <InnerWrapper>
                    <Title52Bold>Page not found</Title52Bold>
                </InnerWrapper>
            </div>
        </Wrapper>
    )
}

export default NotFoundPage as React.FC
