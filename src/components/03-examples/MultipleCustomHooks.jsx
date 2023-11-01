import { useCounter, useFetch } from "../../hooks"
import { LoadingQuote,Quote } from "./";

export const MultipleCustomHooks = () => {
    const {incremento, counter} = useCounter()


    const {data, isLoading, hasError} = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${counter}`)

    const { author, quote } = !!data && data[0];
  return (
    <>
        <h1>Breaking bad Quotes</h1>
        <hr />
        {/* {
            isLoading 
                ?
            (
                <div className="alert alert-info text-center">
                    Loading...
                </div>
            )
                :
            (
                <blockquote className="blockquote text-end">
                <p className="mb-1"> { quote } </p>
                <footer className="blockquote-footer"> { author } </footer>
                </blockquote>
            )
        } */}
        {isLoading 
            ? <LoadingQuote/>

            : <Quote quote={ quote } author={ author }/>
        }
        
        

        <button onClick={incremento} disabled={isLoading} className="btn btn-primary">
            Cambiar
        </button>

    </>
  )
}
