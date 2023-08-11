import styled from 'styled-components'

export const CustomButton = styled.button`
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
    line-height: 26px;
    font-size: 15px;
    text-transform: uppercase;
    font-weight: 500;
    border-radius: 4px;
    letter-spacing: 0.46px;
    display: inline-flex;
    gap: 16px;
    align-items: center;
    padding: 8px 22px;
    justify-content: center;
    box-sizing: border-box;
    height: auto;

    width: fit-content;

    background: #7d5bdd;
    color: #fff;
    border: 1px solid #5d32d5;
    &:disabled {
        border: 1px solid #7d5bdd;

        cursor: no-drop;
    }
`
