//import { memo } from 'react'
import React from 'react'

export const Small = React.memo(({value}) => {
    console.log('Me volví a dibujar :v')
  return (
    <small>{ value }</small>
  )
})
