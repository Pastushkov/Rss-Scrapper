import styled, { css } from 'styled-components'

export const LoaderParent = styled.div`
    position: relative;
    padding: 6px 1px 0;
    width: inherit;
    display: inherit;
    justify-content: inherit;
    align-items: inherit;
    gap: inherit;
    flex-direction: inherit;
    flex-wrap: inherit;
`

export const LoaderChild = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 50px;
    height: 100%;
    min-height: 50px;
    background-color: #fff;
    opacity: 0.7;
    z-index: 500;
`

export const LoadingTetleWrapper = styled.div<{
    color: string
    fw: number | string
    fz: number
}>`
    color: ${({ color }) => color};
    margin-right: 10px;
    ${({ fw, fz }) => css`
        font-size: ${fz}px;
        font-weight: ${fw};
    `};
`
