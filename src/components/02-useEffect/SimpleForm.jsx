import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username:'Marcos',
        email:'marcos@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target})=>{
        const {name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    useEffect(()=>{
        console.log('useEffectCalled!!!')
    },[]);

    useEffect(()=>{
        console.log('FormState changed!!!')
    },[formState])

    useEffect(()=>{
        console.log('email changed!!!')
    },[email])

  return (
    <>
        <h1>Formulario Form</h1>
        <hr />
        <input 
            type="text" 
            className="form-control" 
            placeholder="Username"
            name="username"
            value={username}
            onChange={onInputChange} />
        <input 
            type="emai" 
            className="form-control mt-2" 
            placeholder="marcos@gmail.com"
            name="email"
            value={email}
            onChange={onInputChange} />
        {
            (username === 'Marcosaa')&& <Message/>
        }
    </>
  )
}
