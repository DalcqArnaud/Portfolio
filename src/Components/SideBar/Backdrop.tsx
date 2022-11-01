import React, { FC } from 'react'
import { BackdropDiv } from './SideBarStyles'

interface backdropProps{
    changeSideBarState?:((sideBarState:boolean) => void | undefined)
    getSideBarState?:boolean
}

const Backdrop:FC<backdropProps> = (props) => {

    const BackdropClick = () => {
        props.changeSideBarState?.(!props.getSideBarState);
    }
    
    return (
        <BackdropDiv onClick={BackdropClick}/>
    )
}

export default Backdrop