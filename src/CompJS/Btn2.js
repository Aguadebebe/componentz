import React from "react";
import { useState } from "react";
import "../CompCSS/Btn2.css";

function Btn2DoThings() {

    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount((currentCount) => currentCount + 1);
    };

    const decrementCounter = () => {
        setCount((currentCount) => currentCount - 1);
    }
    return (
        <div className="button2-container">
        <button className="button2" onClick={incrementCounter}>
        BtnPlus
        </button>
        <button className="button2" onClick={decrementCounter}>
        BtnMinus 
        </button>
        <div className="count-container" style={{ fontSize: "40px"}}>Add: {count}</div>
        </div>
    );
};


export default Btn2DoThings;