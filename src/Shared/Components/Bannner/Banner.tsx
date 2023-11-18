import React from 'react'
import { Wrapper } from './Banner.style'
import { Button } from '..'

const Banner: React.FC = () => {
  return (
    <Wrapper>
      <div className='text'>
        <p className="large">Super discount on more than N1000</p>
        <p className="small">Have you ever finally just lorem ipsum</p>
      </div>
      <Button 
        className="button"
        color="#FFF"
        background="#FF9017"
      >
        Shop now
      </Button>
    </Wrapper>
  )
}

export default Banner