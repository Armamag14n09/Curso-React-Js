import { createContext, useState } from "react";



export const LoginContext = createContext()

const usuarios= [
    {
        email:'abc@abc.com',
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
        user: '',
        logged: false
    })
    const[loggedIn, setLoggedIn ] = useState(false)

    return(
        <LoginContext.Provider>
            {children}
        </LoginContext.Provider>
    )
}