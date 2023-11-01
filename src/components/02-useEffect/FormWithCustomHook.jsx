import { useEffect, useState } from "react"
import { useForm } from "../../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange,onResetForm, username,email,password} = useForm({
        username:'',
        email:'',
        password:''
    })

    //const{username,email,password}= formState;

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
        <h1>Formulario con custom Hook</h1>
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
        <input 
            type="password" 
            className="form-control mt-2" 
            placeholder="contraseña"
            name="password"
            value={password}
            onChange={onInputChange} />

        <button onClick={onResetForm} className="btn btn-danger mt-3">
            Reset
        </button>
    
    </>
  )
}
