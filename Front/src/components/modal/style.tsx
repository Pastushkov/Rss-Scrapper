import { colors } from 'style/colors'
import { widthSize } from 'style/sizes'
import styled from 'styled-components'

export const CustomModalWrapper = styled.div<{
    alignModal: boolean
}>`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: ${({ alignModal }) => (alignModal ? 'start' : 'center')};
    padding: '15px';
    z-index: 999999;
    width: 100vw;
    height: 100vh;
    background-color: rgb(0, 0, 0, 0.5);
    opacity: 0;
    pointer-events: none;
    overflow-y: auto;
    &.open {
        transition: 0.5s;
        pointer-events: all;
        opacity: 1;
    }
`

export const CustomModalBody = styled.div`
    position: relative;
    width: max-content;
    min-width: 850px;
    padding: 1px;
    padding-right: 20px;
    border: 30px solid ${colors.white};
    border-right: 0;
    border-radius: 4px;
    background-color: ${colors.white};
    transform: scale(0);

    @media screen and (${widthSize.w_700}) {
        width: 96%;
    }

    &.open {
        transform: scale(1);
        transition: 0.5s;
    }

    &::-webkit-scrollbar {
        width: 15px;
    }

    &::-webkit-scrollbar-track {
        background-color: ${colors.white};
    }

    &::-webkit-scrollbar-thumb {
        border-radius: 500px;
        border: 5px solid transparent;
        background-clip: content-box;
        background-color: ${colors.grey};
    }
`

export const Label = styled.div`
    margin-bottom: 21px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;

    .cross {
        cursor: pointer;
    }

    @media screen and (${widthSize.w_375}) {
        font-size: 30px;
    }
    & > div {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`

export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 20px;
    & > * {
        margin-right: 15px;
        &:last-child {
            margin-right: 0;
        }
    }
    @media screen and (${widthSize.w_320}) {
        width: 100%;
        flex-direction: column;
        gap: 10px;
        & > * {
            width: 100% !important;
            margin: 0;
        }
    }
`

export const ModalWrapper = styled.div<{ width?: number }>`
    width: ${({ width }) => width ?? 610}px;
    @media screen and (${widthSize.w_700}) {
        width: 100%;
    }
`

export const InputsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`
