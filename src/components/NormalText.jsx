import React from 'react'

const NormalText = ({children,style}) => {
  return (
    <p style={{...style}}>{children}</p>
  )
}

export default NormalText