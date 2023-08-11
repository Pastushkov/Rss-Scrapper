import { colors } from 'style/colors'
import styled from 'styled-components'

export const SignInWrapper = styled.div`
    width: 100%;
    min-height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Parts = styled.div`
    padding: 15px;
    width: 50%;
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;

    &.welcome_part {
        background-color: ${colors.ligt_blue_gray};
    }
    &.form_part {
        box-shadow: 0px 4px 30px #edf0f1;
    }
`

export const WelcomeWrapper = styled.div`
    text-align: center;
    .welcome {
        font-family: 'Comfortaa', cursive;
        font-style: normal;
        font-weight: 600;
        font-size: 39px;
        color: ${colors.black};
        margin-bottom: 5px;
    }
    .panel_name {
        font-family: 'Comfortaa', cursive;
        font-style: normal;
        font-weight: 600;
        font-size: 52px;
        color: ${colors.purple};
        margin-bottom: 24px;
    }
    .logo {
    }
`

export const FormWrapper = styled.div`
    width: 100%;
    max-width: 520px;

    .input_wrapper {
        margin-bottom: 15px;
    }
`

export const FormTitle = styled.h4`
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: ${colors.black};
    .special {
        color: ${colors.purple};
    }
    margin-bottom: 25px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    flex-direction: column;
`

export const Line = styled.div`
    margin-top: 10px;
    display: flex;
    gap: 10px;
    .one {
        width: 100%;
    }
    margin-bottom: 10px;
`

export const Bottom = styled.div`
    margin-top: 15px;
`

export const Header = styled.div``
