import React, {useState} from 'react';

function LoginForm({Login, error}){
    const [details, setDetails] = useState({name: "", email: "", password:""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details);
    }

    return(
        <form onSubmit={submitHandler}>
            <div className = "form-inner">
                <h2>Inciar Sesion</h2>
                {(error != "") ? (<div className = "error">{error}</div>) : ""}
                <div className = "form-group">
                    <label>Nombre</label>
                    <input type = "text" name = "userName" id = "userName" 
                        onChange={e => setDetails({...details, name: e.target.value})} value = {details.name}/>
                </div>
                <div className = "form-group">
                    <label>Email</label>
                    <input type = "email" name = "userEmail" id = "userEmail" 
                        onChange={e => setDetails({...details, email: e.target.value})} value = {details.email}/>
                </div>
                <div className = "form-group">
                    <label>Contraseña</label>
                    <input type = "password" name = "userPassword" id = "userPassword" 
                        onChange={e => setDetails({...details, password: e.target.value})} value = {details.password}/>
                </div>
                <input type = "submit" value = "Continuar"/>
             </div>
        </form>
    )
}

export default LoginForm;