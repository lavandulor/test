import React, {useState, Fragment} from 'react'
import InputNumber from '../component/inputNumber'

function InputNumberDemo(){
    const [value, setValue] = useState(0)
    let number = 0;
    return (
        <Fragment>
            {/*  受控组件 */}
            <InputNumber size='large' value = {value} onChange={(e) => {
                setValue(e.target.value)
            }}/>
            <br />
            {/*  非受控组件 */}
            <InputNumber 
                rule={/\d/}
                message="只允许输入数字"
                size='large' defaultValue = {number} onChange={(e) => {
                    number = e.target.value
            }}/>
        </Fragment>
    )
}

export default InputNumberDemo