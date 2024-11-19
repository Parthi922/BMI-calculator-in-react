import React, { useState } from 'react';
import "./BMICalculator.css";

function BMICalculator() {
    const [height, SetHeight] = useState("");
    const [weight, SetWeight] = useState("");
    const [bmi, SetBmi] = useState(null);
    const [category, SetCategory] = useState("");

    const CalculateBMI = () => {
        if (height && weight) {
            const heightInMeters = height / 100;
            const calculatedBmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

            SetBmi(calculatedBmi);

            if (calculatedBmi < 18.5) {
                SetCategory("Underweight");
            } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
                SetCategory("Normal");
            } else if (calculatedBmi >= 25 && calculatedBmi <= 29.9) {
                SetCategory("Overweight");
            } else {
                SetCategory("Obese");
            }
        }
    };

    return (
        <div className='bmi-card'>
            <h2>BMI Calculator</h2>
            <div className='input-group'>
                <label>Weight (kg)</label>
                <input
                    type='number'
                    value={weight}
                    onChange={(e) => SetWeight(e.target.value)}
                    placeholder='Enter your weight'
                />
            </div>
            <div className='input-group'>
                <label>Height (cm)</label>
                <input
                    type='number'
                    value={height}
                    onChange={(e) => SetHeight(e.target.value)}
                    placeholder='Enter your height'
                />
            </div>
            <button className='btn-calculator' onClick={CalculateBMI}>Calculate BMI</button>
            {bmi && (
                <div className='result'>
                    <h3>Your BMI: {bmi}</h3>
                    <h4>Category: {category}</h4>
                </div>
            )}
        </div>
    );
}

export default BMICalculator;
