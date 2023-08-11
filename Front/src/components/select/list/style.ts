import { colors } from 'style/colors'
import styled, { css } from 'styled-components'
import { SelectText } from '../style'

export const StyledList = styled.ul`
    z-index: 9999999999999;
    display: block;
    position: absolute;
    top: 110%;
    width: 100%;
    padding: 8px 0;
    color: rgba(0, 0, 0, 0.87);
    transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: ${colors.white};
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 20%) 0px 5px 5px -3px, rgb(0 0 0 / 14%) 0px 8px 10px 1px, rgb(0 0 0 / 12%) 0px 3px 14px 2px;
    list-style: none;

    max-height: 200px;
    overflow: auto;

    & span {
        padding: 0 16px;
        color: ${colors.black};
    }

    &::-webkit-scrollbar {
        width: 7px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${colors.white};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 50px;
        border: 2px solid transparent;
        background-clip: content-box;
        background-color: ${colors.grey};
    }
`

export const StyledLi = styled(SelectText)<{ hover?: boolean }>`
    color: ${colors.dark_grey};
    padding: 6px 16px;

    ${({ hover }) =>
        hover &&
        css`
            &:hover {
                background-color: rgba(25, 118, 210, 0.12);
            }
        `}
`

export const SectionWrapper = styled.div`
    .title {
        padding: 5px 15px;
        font-weight: 600;
    }
`
