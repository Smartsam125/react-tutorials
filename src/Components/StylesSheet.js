import React from 'react'
import './myStyles.css'

function StylesSheet({primary}) {
    let className = primary ? 'primary' : ''
  return (
    <div className={`${className} font_xl`}
    >StylesSheet
    <h3></h3>
    </div>
  )
}

export default StylesSheet