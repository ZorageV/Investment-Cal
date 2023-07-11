
const FormInput = (props) => {
    const changeHandler = (event) => {
        event.preventDefault()
        props.change(parseInt(event.target.value))
    }
    return (
        <div>
            <p>
                <label htmlFor={props.hf}>{props.name}</label>
                <input type={props.type} id={props.id} onChange={changeHandler} value={props.val} />
            </p>
        </div>
    )
}

export default FormInput