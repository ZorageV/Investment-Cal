import { useState } from "react"
import FormInput from "./FormInput"

const Form = (props) => {
    const [currentSavings,setCurrentSavings] = useState()
    const [yearlySavings,setYearlySavings] = useState()
    const [interest,setInterest] = useState()
    const [duration,setDuration] = useState()

    const currentSavings_ = (value) => {
        setCurrentSavings((prev) => prev=value)
    }
    const yearlySavings_ = (value) => {
        setYearlySavings((prev) => prev=value)
    }
    const interest_ = (value) => {
        setInterest((prev) => prev=value)
    }
    const duration_ = (value) => {
        setDuration((prev) => prev=value)
    }
    
    const data = {
        'current-savings' : currentSavings,
        'yearly-contribution' : yearlySavings,
        'expected-return' : interest,
        'duration' : duration 
    }

    const submitHandler =(event) => {
        event.preventDefault()
        props.change(data)
    }

    const resetHandler = () => {
        
    }

    return (
        <div>
            <form onSubmit={submitHandler} className="form">
                <div className="input-group">
                    <FormInput change={currentSavings_}
                        name="Current Savings ($)"
                        hf="current-savings"
                        type="number"
                        id="current-savings"
                    ></FormInput>
                    <FormInput change={yearlySavings_}
                        name="Yearly Savings ($)"
                        hf="yearly-contribution"
                        type="number"
                        id="yearly-contribution"
                    ></FormInput>
                </div>
                <div className="input-group">
                    <FormInput change={interest_}
                        name="Expected Interest (%, per year)"
                        hf="expected-return"
                        type="number"
                        id="expected-return"
                    ></FormInput>
                    <FormInput change={duration_}
                        name="Investment Duration (years)"
                        hf="duration"
                        type="number"
                        id="duration"
                    ></FormInput>
                </div>
                <p className="actions">
                    <button type="reset" className="buttonAlt" onClick={resetHandler}>
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