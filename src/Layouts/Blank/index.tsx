import React from "react"
import { Wrapper } from "./blank.style"

const Screen:React.FC = (props:any)=>{
return (
    <Wrapper>
        {props.children}
    </Wrapper>
)
}

export default Screen