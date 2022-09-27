import { createContext, useContext, useState } from "react";



export const LoginContext = createContext()

const usuarios= [
    {
        email:' ',
        password: '1234'
    },
    {
        email:'armando@denis.com',
        password: '1234'
    },
    {
        email:'coder@coder.com',
        password: 'coder'
    },

]


export const LoginProvider = ({children} ) => {

    const[user, setUser ] = useState( {
        user: 'armando@denis.com',
        logged: true
    })
const login = (values   ) =>{
    const match = usuarios.find(user => user.email === values.email)

    if(match){
        if(match.password === values.pass){
            setUser({
                user:match.email,
                logged:true
            })
        }else{
            alert("Password incorrecto")
        }
    }else{
        alert("Email incorrecto")
    }
}

    const[loggedIn, setLoggedIn ] = useState(false)

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
    }

    return(
        <LoginContext.Provider value={{user, login, logout}}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginCotext = () => {
    return useContext(LoginContext)
}