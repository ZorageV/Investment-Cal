import { useState } from "react"

const FormInput = (props) => {
    const [value,setValue] = useState('')

    const changeHandler = (event) =>{
        setValue(event.target.value)
        props.change(value)
    }
    return (
        <div>
            <p>
                <label htmlFor={props.hf}>{props.name}</label>
                <input type={props.type} id={props.id} onChange={changeHandler} />
            </p>
        </div>
    )
}

export default FormInput