import { useContext } from "react"
import { UserContext } from "./Context/UserContext"

export const HomePage = () => {

    const { user } = useContext(UserContext);

    return (
        <>
        <h1>HomePage de {user?.name}</h1>
        <hr />

        <pre>
            {JSON.stringify(user, null, 3)}
        </pre>
        </>

    )
}
