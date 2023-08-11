import { colors } from 'style/colors'
import styled from 'styled-components'

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`

export const Cover = styled.div`
    margin: 5px;
    .list {
        display: flex;
    }
`

export const Article = styled.div`
    border: 1px solid ${colors.dark_grey};
    padding: 10px;
    max-width: 800px;
    width: 100%;
    text-align: justify;
    .title {
        padding: 10px;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 10px;

        .image {
            max-width: 150px;
            width: 100%;
        }
    }

    .description {
        overflow-wrap: anywhere;
    }

    .bottom {
        padding: 10px;
        display: flex;
        justify-content: space-between;
        color: ${colors.dark_grey};
        .link {
            text-decoration: none;
            color: ${colors.purple};
        }
    }
`
export const FormWrapper = styled.div`
    display: flex;
    flex-grow: 1;
    width: 100%;
    align-items: center;
    gap: 10px;
`
export const Panel = styled.div`
    border: 1px solid ${colors.dark_grey};
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    .icon {
        cursor: pointer;
        &:hover {
            path {
                fill: ${colors.black};
            }
        }
    }
`

export const ListHead = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .icon {
        cursor: pointer;
    }
`
