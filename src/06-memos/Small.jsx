// import { memo } from "react"
// It isn`t common see it this way

// Only works React.memo in cra create react app in vite it doesn`t works
// With vite we need to import this 
import React from "react"

// This is the common way to see it
export const Small = React.memo(({ value }) => {

    console.log('Me volví a dibujar :(')

  return (
    <small>{ value }</small>
  )
})