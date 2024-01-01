import { string } from 'prop-types'
import React from 'react'

type HeaderProps={
    title:string,
}

export default function Header({title}:HeaderProps) {
  return (
    <h1>{title}</h1>
  )
}
