import { useState } from "react"
import FormInput from "./FormInput"

const Form = (props) => {
    const [currentSavings,setCurrentSavings] = useState()
    const [yearlySavings,setYearlySavings] = useState()
    const [interest,setInterest] = useState()
    const [duration,setDuration] = useState()

    const currentSavings_ = (value) => {
        setCurrentSavings(value)
    }
    const yearlySavings_ = (value) => {
        setYearlySavings(value)
    }
    const interest_ = (value) => {
        setInterest(value)
    }
    const duration_ = (value) => {
        setDuration(value)
    }

    const submitHandler =(event) => {
        event.preventDefault()
        props.addData({
            'current-savings' : currentSavings,
            'yearly-contribution' : yearlySavings,
            'expected-return' : interest,
            'duration' : duration 
        })
    }

    const resetHandler = (event) => {
        event.preventDefault()
        setCurrentSavings(0)
        setDuration(0)
        setInterest(0)
        setYearlySavings(0)
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
                        val = {currentSavings}
                    ></FormInput>
                    <FormInput change={yearlySavings_}
                        name="Yearly Savings ($)"
                        hf="yearly-contribution"
                        type="number"
                        id="yearly-contribution"
                        val = {yearlySavings}
                    ></FormInput>
                </div>
                <div className="input-group">
                    <FormInput change={interest_}
                        name="Expected Interest (%, per year)"
                        hf="expected-return"
                        type="number"
                        id="expected-return"
                        val = {interest}
                    ></FormInput>
                    <FormInput change={duration_}
                        name="Investment Duration (years)"
                        hf="duration"
                        type="number"
                        id="duration"
                        val = {duration}
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