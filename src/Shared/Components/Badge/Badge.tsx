import React from 'react'
import { Container } from './badge.styles'

const Badge:React.FC<{count:number}> = ({count}) => {
  return (
    <Container>
        {count}
    </Container>
  )
}

export default Badge