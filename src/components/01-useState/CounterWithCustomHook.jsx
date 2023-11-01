import { useCounter } from "../../hooks/useCounter"

export const CounterWithCustomHook = () => {

    const {counter,incremento, decremento,reset} = useCounter();

    return (
        <>
            <h1>Counter with hook: {counter}</h1>
            <hr />
            <button onClick={incremento} className="btn btn-success">+1</button>
            <button onClick={reset} className="btn btn-secondary">Reset</button>
            <button onClick={() => decremento(2)} className="btn btn-danger">-2</button>
        </>
    )
}
