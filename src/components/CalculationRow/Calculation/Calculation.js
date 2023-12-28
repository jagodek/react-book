import React, { useState } from "react";

import './Calculation.css'

function Calculation(props){
    // const [values,setValues] = useState({
    //     'leftFactor': '',
    //     'rightFactor': '',
    //     'result': ''
    // })

   
      
    
    return (
        <>    
        <div className="container">
            <input type="text" onChange={props.updateLeftFactor}/>
            <select name="operation" onClick={props.updateOperator}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input type="text" onChange={props.updateRightFactor}/>
        </div>
        {/* <p>{values.leftFactor}</p>
        <p>{values.rightFactor}</p>
        <p>{values.leftFactor}{props.operator}{values.rightFactor}</p> */}
        </>

    )
}

export default Calculation