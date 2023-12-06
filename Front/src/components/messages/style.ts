import styled from 'styled-components'

export const Toast = styled.div<{ type: 'error' | 'success' | '' }>`
    position: absolute;
    right: 20px;
    top: 20px;
    width: 200px;
    height: 70px;
    background: ${({ type }) => (type === 'success' ? '#b5e550' : '#fb4918')};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    font-size: 16px;
    gap: 5px;
    cursor: pointer;
    z-index: 999999999;
`
