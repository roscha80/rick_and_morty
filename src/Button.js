import './Button.css'
import * as React from 'react'

export default ({ children, isActive }) => {
  return (
    <button className={isActive ? 'Button active' : 'Button'}>
      {children}
    </button>
  )
}
