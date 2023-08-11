import { colors } from 'style/colors'
import styled, { css } from 'styled-components'
import { IsSelectOpen } from './interfaces'

export const SelectWrapper = styled.div<IsSelectOpen>`
    cursor: pointer;
    position: relative;
    width: 100%;
    border-radius: 4px;
    box-sizing: border-box;
    border: 1px solid ${colors.purple};
    &:first-child {
        margin-left: 0;
    }
    &.mode-input {
        border: none;
    }

    ${({ disabled }) =>
        disabled &&
        css`
            background-color: ${colors.grey};
            cursor: not-allowed;
        `}
    &.error {
        border: 1px solid ${colors.red};
    }
`

export const SelectBodyWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    min-height: 50px;
    padding: 15px;
    gap: 5px;
`

export const SelectText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${colors.purple};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`
export const IconWrapper = styled.div<IsSelectOpen>`
    width: fit-content;
    display: flex;
    align-items: center;
    transition: 0.3s;
    transform: ${({ isOpen }) => (isOpen ? `rotate(180deg)` : ``)};

    &.mode-input {
        transform: ${({ isOpen }) =>
            isOpen
                ? `translate(0, -50%) rotate(180deg)`
                : `translate(0, -50%)`};
        position: absolute;
        top: 50%;
        right: 15px;
    }
`
export const SelectLabel = styled.span`
    position: absolute;
    padding: 0 2px;
    left: 15px;
    top: -15%;
    font-weight: 700;
    font-size: 12px;
    line-height: 14px;
    background-color: ${colors.white};
    color: ${colors.purple};
    &.error {
        color: ${colors.red};
    }
`

export const ErrorSelect = styled.p`
    color: ${colors.red};
    margin: 3px 0 0 3px;
    font-weight: normal;
    font-size: 14px;
    line-height: 19px;
`

export const SelectWrapperBox = styled.div`
    width: 100%;
`
