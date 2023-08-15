import React from "react";
import { useState } from "react";
import style from "./Login.module.css"

const regexEmail =
 /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

export function validate(inputs) {
 let errors = {};
 if (!inputs.email) {
  errors.email = "Se requiere un email";
 }  
 if (!regexEmail.test(inputs.email)) {
  errors.email =
   "Debe ser un correo electrónico";
 } 
 if(inputs.email.length >=35) {
    errors.email="No puede tener mas de 35 characteres";
 } 
 if (!/\d/.test(inputs.password)) {
  errors.password ="Se requiere un numero";
 }
 if(inputs.password.length >= 10 || inputs.password.length <= 6) {
    errors.password ="Debe estar entre 6 y 10 caracteres";
 }
 console.log(errors);
 return errors;
}


export default function Login(props){
    const[user,setUser]=useState({email:"",password:""});
    const [errors, setErrors] = useState({
        email: "",
        password: "",
       });
    

    function handleChange(e){
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
        setErrors(
            validate({
             ...user,
             [e.target.name]:
              e.target.value,
            })
           );
    }
    function handleSubmit(evento) {
        evento.preventDefault();
        props.login(user);
       }
    return (
     <div>
      <form className={style.container} onSubmit={handleSubmit}>
       <label>Correo Electronico</label>
       <input
        type='text'
        name='email'
        placeholder='Email'
        value={user.email}
        onChange={handleChange}
       />
       {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
       <label>Contraseña</label>
       <input
        type='password'
        name='password'
        value={user.password}
        onChange={handleChange}
       />
       {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
       <button className={style.closeButton} type='submit'>Submit</button>
      </form>
     </div>
    );
}