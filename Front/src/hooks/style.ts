import { colors } from 'style/colors'
import styled from 'styled-components'

export const PaginationWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
`
export const Item = styled.div`
    cursor: pointer;
    padding: 0 5px;
    min-width: 40px;
    height: 40px;
    color: ${colors.black};
    border: 1px solid ${colors.grey};
    background-color: ${colors.white};
    border-radius: 5px;

    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;

    &.active {
        border: 1px solid ${colors.purple};
        background-color: ${colors.purple_light};
    }
`
