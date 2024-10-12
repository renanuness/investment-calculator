import { useState } from "react";


export default function Form({investmentInfo, onChangeInput}) {
    // const [investmentInfo, setInvestmentInfo] = useState({ initialInvestment: 0, anualInvestment: 0, expectedReturn: 0, duration: 0 });

    // function handleInputChange(value, field) {
    //     setInvestmentInfo((prevValues) => {
    //         let d = {
    //             ...prevValues,
    //             [field]: value
    //         }

    //         return d;
    //     })
    // }

    return (
        <div id="user-input">
            <label htmlFor="">Initial Investment</label>
            <input name="initialInvestment" id="initialInvestment" type="numer" value={investmentInfo.initialInvestment} onChange={(e) => onChangeInput(e.target.value, "initialInvestment")} />

            <label htmlFor="">Annual Investment</label>
            <input name="annualInvestment" id="annualInvestment" type="numer" value={investmentInfo.anualInvestment} onChange={(e) => onChangeInput(e.target.value, "annualInvestment")} />

            <label htmlFor="">Expected Return</label>
            <input name="expectedReturn" id="expectedReturn" type="numer" value={investmentInfo.expectedReturn} onChange={(e) => onChangeInput(e.target.value, "expectedReturn")} />

            <label htmlFor="">Duration</label>
            <input name="duration" id="duration" type="numer" value={investmentInfo.duration} onChange={(e) => onChangeInput(e.target.value, "duration")} />
        </div>
    )
}