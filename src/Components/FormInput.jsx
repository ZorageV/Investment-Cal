const FormInput = (props) => {
    return (
        <div>
            <p>
                <label htmlFor={props.hf}>{props.name}</label>
                <input type={props.type} id={props.id} />
            </p>
        </div>
    )
}

export default FormInput