import React from 'react';
import LoginForm from './LoginForm';

function LoginComponent() {
    const userTest = {
        email: "user@test.com",
        password: "12345"
    }

    const [user, setUser] = React.useState({name: "", email: ""});
    const [error, setError] = React.useState("");

    const Login = details =>{
        console.log(details);

        if (details.email === userTest.email && details.password === userTest.password) {
            setUser({
                name: details.name,
                email: details.email
            })
        } else {
            setError("Correo o contraseña incorrecta")
        }
    }

    const Logout = () =>{
        console.log("Saliendo");
        setUser({name: "", email: ""})
    }

    return(
        <div>
            {(user.email !== "") ? (
                <div>
                    <h2>{user.name}</h2>
                    <button onClick={Logout}>Salir</button>
                </div>
            ) : (
                <div>
                    <LoginForm Login={Login} error={error}/>
                </div>
            )}
        </div>
    )
}

export default LoginComponent;