import React from 'react'
import {heading} from './GrandText.module.css'
const GrandText = ({children,style,sp}) => {
  return (
    <h2 className={`${heading} ${sp?'small':''}`} style={{...style}}>{children}</h2>
  )
}

export default GrandText