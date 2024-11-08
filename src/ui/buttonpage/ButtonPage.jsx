import React from 'react'

const ButtonPage = ({label, classname, href}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <button className={classname}>{label}</button>
    </a>
  )
}

export default ButtonPage