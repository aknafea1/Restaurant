import React from 'react'
import {title} from './TitleText.module.css'
const TitleText = ({children,style}) => {
  return (
    <div className={title} style={{...style}}>
        <h3 style={{...style}}>{children}</h3>
    </div>
  )
}

export default TitleText