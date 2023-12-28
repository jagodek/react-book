import { useState } from "react";


import './CalculationRow.css'
import Calculation from "./Calculation/Calculation";
import Display from "./Display/Display";





function CalculationRow(){
    const [factors, setFactors] = useState({
        "left": "",
        "right": "",
        "operator": "",
    })

    function updateLeftFactor(event){
        setFactors((prevValue)=>({
            'left': parseFloat(event.target.value),
            'right': prevValue.right,
            'operator': prevValue.operator,
        }));
        evaluate();
    }
    
    function updateRightFactor(event){
        setFactors((prevValue)=>({
            'left': prevValue.left,
            'right': parseFloat(event.target.value),
            'operator': prevValue.operator,
        }));
        evaluate();
    }
    
    function updateOperator(event){
        setFactors((prevValue)=>({
            'left': prevValue.left,
            'right': prevValue.right,
            'operator': event.target.value,
        }));
        evaluate();
    }
    
    function evaluate(){
        setFactors((prevValue)=>{
            
            try{
                prevValue.result = eval(prevValue.left+`${factors.operator}`+prevValue.right)
            }
            catch{
                prevValue.result = "err"
            }
            return prevValue
            })
    }

    let result;

    
    switch(factors.operator){
        case '+' :
            result = factors.left + factors.right;
            break;
        case '-':
            result = factors.left - factors.right;
            break;
        case '*':
            result = factors.left * factors.right;
            break;
        case '/':
            result = factors.left / factors.right;
            break;
    }
    

    return(
        <div className="CalculationRowContainer">
            <Calculation updateRightFactor={updateRightFactor} updateLeftFactor={updateLeftFactor} updateOperator={updateOperator} />
            <p>=</p>
            <Display result ={result} />
            {/* <p>{factors.left}</p>
            <p>{factors.right}</p>
            <p>{factors.operator}</p>
            <p>{factors.result}</p> */}
        </div>
    )
}

export default CalculationRow;