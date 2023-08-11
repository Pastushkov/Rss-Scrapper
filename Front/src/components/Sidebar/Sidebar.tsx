import React, { FC, ReactElement } from 'react'
import { SidebarWrapper } from './style'
import Bar from './Components/Bar'

interface IProps {
    children: ReactElement
}

const Sidebar: FC<IProps> = ({ children }) => {
    return (
        <SidebarWrapper>
            <div className='sidebar'>
                <Bar />
            </div>
            <div className='children'>{children}</div>
        </SidebarWrapper>
    )
}

export default Sidebar
