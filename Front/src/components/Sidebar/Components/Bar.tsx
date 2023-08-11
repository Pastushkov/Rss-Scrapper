import React, { FC } from 'react'
import { BarWrapper } from './style'
import Menu from './Menu'
import Footer from './Footer'

const Bar: FC = () => {
    return (
        <BarWrapper>
            <div className='menu'>
                <Menu />
            </div>
            <div className='footer'>
                <Footer/>
            </div>
        </BarWrapper>
    )
}
export default Bar
