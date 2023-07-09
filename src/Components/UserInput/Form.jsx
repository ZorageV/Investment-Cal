import FormInput from "./FormInput"


const Form = () => {
    return (
        <div>
            <form className="form">
                <div className="input-group">
                    <FormInput
                        name="Current Savings ($)"
                        hf="current-savings"
                        type="number"
                        id="current-savings"
                    ></FormInput>
                    <FormInput
                        name="Yearly Savings ($)"
                        hf="yearly-contribution"
                        type="number"
                        id="yearly-contribution"
                    ></FormInput>
                </div>
                <div className="input-group">
                    <FormInput
                        name="Expected Interest (%, per year)"
                        hf="expected-return"
                        type="number"
                        id="expected-return"
                    ></FormInput>
                    <FormInput
                        name="Investment Duration (years)"
                        hf="duration"
                        type="number"
                        id="duration"
                    ></FormInput>
                </div>
                <p className="actions">
                    <button type="reset" className="buttonAlt">
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    )
}

export default Form