import { colors } from 'style/colors'
import styled from 'styled-components'

const SIDEBAR_WIDTH = 200

export const SidebarWrapper = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    .sidebar {
        width: 100%;
        max-width: ${SIDEBAR_WIDTH}px;
        box-shadow: 0px 4px 30px #edf0f1;
        border-right: 1px solid ${colors.grey_silver};
    }
    .children {
        width: calc(100vw - ${SIDEBAR_WIDTH}px);
        overflow: auto;
        /* padding: 50px; */
    }
`
