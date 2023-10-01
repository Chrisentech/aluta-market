import React, { useState } from 'react'
import MultiRangeSlider, { ChangeResult } from "multi-range-slider-react"
import { Wrapper, InputContainer } from './RangeSlider.style'
import { Button } from '..'

const RangeSlider: React.FC = () => {
    const [minValue, setMinValue] = useState<number | string | undefined>(0)
    const [maxValue, setMaxValue] = useState<number | string | undefined>(999999)

    const onInputHandler = (e: ChangeResult) => {
        setMinValue(e.minValue);
	    setMaxValue(e.maxValue);
    }

    const minChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMinValue(e.target.value)
    }

    const maxChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMaxValue(e.target.value)
    }

    return (
        <Wrapper>
            <MultiRangeSlider 
                min={0}
                max={999999} 
                step={100}
                minValue={minValue as number}
                maxValue={maxValue as number} 
                ruler={false}
                label={false}
                onInput={onInputHandler}
            />
            <InputContainer>
                <label>
                    Min
                    <input 
                        type='text' 
                        placeholder='0' 
                        value={minValue}
                        onChange={minChangeHandler}
                    />
                </label>
                <label>
                    Max
                    <input 
                        type='text' 
                        placeholder='999999' 
                        value={maxValue}
                        onChange={maxChangeHandler}
                    />
                </label>
            </InputContainer>
            <Button className="apply" padding={16} width="auto" height={40} border="1px solid #dee2e7" color="#0d6efd">
                Apply
            </Button>
        </Wrapper>
    )
}

export default RangeSlider;
