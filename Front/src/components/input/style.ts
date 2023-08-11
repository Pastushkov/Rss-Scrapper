import styled from 'styled-components'
import { colors } from '../../style/colors'

export const InputContainer = styled.div`
    width: 100%;
`

export const InputWrapper = styled.div`
    width: 100%;
    position: relative;
    .input_body {
        display: block;
        width: 100%;

        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 19px;
        color: ${colors.dark_grey};
        height: 3.2em;
        padding: 0 15px;
        border-radius: 4px;
        border: 1px solid ${colors.grey};

        &:focus {
            outline: none;
            color: ${colors.purple};
            border: 1px solid ${colors.purple};
        }

        &::placeholder {
        }

        -webkit-box-shadow: inset 0 0 0 50px #fff;
        &:disabled.disabled_show {
            -webkit-box-shadow: inset 0 0 0 50px ${colors.ligt_blue_gray};
        }

        &.select_mode {
            cursor: pointer;
        }
        &:disabled.select_mode {
            cursor: not-allowed;
        }
        &:disabled {
            cursor: not-allowed;
        }
    }
    .input_body.is_value {
        color: ${colors.purple};
        border: 1px solid ${colors.purple};
    }
    .input_body.error {
        border: 1px solid ${colors.red};
        color: ${colors.red};
    }

    .input_preffix {
        padding-left: 35px;
    }
    .input_suffix {
        padding-right: 35px;
    }

    .input_preffix_icon,
    .input_suffix_icon {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        cursor: pointer;
        width: 20px;
        height: auto;
        &.disabled {
            fill: ${colors.dark_grey};
            cursor: not-allowed;
        }
    }

    .input_preffix_icon {
        left: 15px;
    }
    .input_suffix_icon {
        right: 15px;
    }
`

export const IconWrrapper = styled.div`
    .input_preffix_icon,
    .input_suffix_icon {
    }
`

export const ErrorLabel = styled.div`
    margin: 3px 0 0 3px;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
    color: ${colors.red};
`

export const Label = styled.div`
    pointer-events: none;
    position: absolute;
    left: 15px;
    &.is_preffix {
        left: 35px;
    }
    top: 50%;
    transform: translate(0, -50%);
    &.aria {
        top: 15px;
        transform: translate(0);
    }
    transition: all 0.3s;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.dark_grey};

    &.is_focus {
        padding: 0 2px;
        left: 15px;
        top: 0;
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        background-color: ${colors.white};
        color: ${colors.purple};
        &.aria {
            transform: translate(0, -50%);
        }
        &.error {
            color: ${colors.red};
        }
    }
    &.disable {
        color: ${colors.dark_grey};
    }
`
