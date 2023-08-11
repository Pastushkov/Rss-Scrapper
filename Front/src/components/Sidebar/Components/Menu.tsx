import React, { FC } from 'react'
import { Link, useLocation } from 'react-router-dom'
import useAccess from 'hooks/useAccess'
import { findActive, sidebarData } from './Menu.data'
import { MenuItem } from './style'

const Menu: FC = () => {
    const { pathname } = useLocation()

    const access = useAccess()

    return (
        <div>
            {sidebarData(access).map(({ label, linkTo, icon: Icon }) => {
                const isActive = findActive(pathname, linkTo)
                return (
                    <MenuItem
                        key={label}
                        className={isActive ? 'active_item' : ''}
                    >
                        <Link className='menu_link' to={linkTo}>
                            <div className='icon_wrapper'>
                                <Icon className='menu_link_icon' />
                            </div>
                            <div className='menu_link_label'>{label}</div>
                        </Link>
                    </MenuItem>
                )
            })}
        </div>
    )
}
export default Menu
