import styled, { css } from 'styled-components'

export const ToCenter = styled.div<{ mt?: number }>`
    ${({ mt }) =>
        mt
            ? css`
                  margin-top: ${mt}px;
              `
            : ''}
    width: 100%;
    display: flex;
    justify-content: center;
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    padding: 10px;
    gap: 10px;
`

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 99vh;
    flex-direction: column;
`

export const Line = styled.div`
    width: 100%;
    display: flex;
    flex-grow: 1;
    gap: 20px;
    margin-bottom: 10px;
`
