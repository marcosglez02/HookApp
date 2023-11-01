import { useState } from "react";

export const useCounter = (initialValue = 1) => {
    const [counter, setCounter] = useState(initialValue);

    const incremento = ()=>{
        setCounter( counter + 1 );
    }

    const decremento = (value = 1)=>{
        if( counter < 0 )return;
        setCounter( counter - value );
        //if (counter===-1) setCounter( 0 )

    }

    const reset = ()=>{
        setCounter( initialValue );
    }

    return{
        counter,incremento,decremento,reset
    }
}