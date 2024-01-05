import ReactDOM from 'react-dom'
import React, { useState } from 'react';


function Form(){

    const [condition, setCondition] = useState(false);


    function response(event){
        event.preventDefault();
        console.log(event.target.email.value)
        if(! /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(event.target.email.value)){
            setCondition(true);
            console.log('true');
        }
        else{
            setCondition(false);
            console.log('false');
        }
        
    }

    const err =  <p>email jest do dupy</p>;

    return (
        <>
        
        <h1>Twój adres email</h1>
        <form onSubmit={response}>

        <input type="text" name='email' placeholder="testtest@test.tesp" />
        <input type="submit" value="Wyślij" />
        {condition && err}

        </form>
        </>
    )
}

export default Form