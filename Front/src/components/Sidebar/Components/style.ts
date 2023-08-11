import { colors } from 'style/colors'
import styled from 'styled-components'

const PADDING_WERTECAL = 20
const PADDING_TOP = 40
export const BarWrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: ${PADDING_TOP}px 0 0 0;
    background: ${colors.white};

    .menu {
        padding: 0 ${PADDING_WERTECAL}px;
        height: calc(100% - 100px);
    }
    .footer {
        height: 100px;
    }
`
export const MenuItem = styled.div`
    margin-top: 10px;
    border: 1px solid darkblue;
    border-radius: 4px;

    .menu_link {
        text-decoration: none;
        display: flex;
        align-items: center;
        padding: 15px 20px;
    }
    .icon_wrapper {
        width: 28px;
        height: 28px;

        display: flex;
        justify-content: center;
        align-items: center;
    }
    .menu_link_icon {
        path {
            fill: ${colors.black};
        }
    }
    .menu_link_label {
        margin-left: 15px;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: ${colors.black};
    }

    &.active_item {
        background: rgba(93, 50, 213, 0.1);
        .menu_link_label {
            color: ${colors.purple};
        }
        .menu_link_icon {
            path {
                fill: ${colors.purple};
            }
        }
    }
`
export const FooterWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const Logout = styled.div`
    cursor: pointer;
    width: 28px;
    height: 28px;

    display: flex;
    justify-content: center;
    align-items: flex-start;
`
