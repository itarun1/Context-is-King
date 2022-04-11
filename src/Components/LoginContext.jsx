import {createContext,useReducer} from 'react'

export const LoginContext=createContext()

const initState = {
    name: '',
    age: '',
    date_of_birth: '',
    state_of_residence: '',
    address: '',
    pincode: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE NAME":
            return { ...state, name:action.payload}
        case "CHANGE AGE":
            return { ...state, age:action.payload}
        case "CHANGE DOB":
            return { ...state, date_of_birth:action.payload}
        case "CHANGE RESIDENCE":
            return { ...state, state_of_residence:action.payload}
        case "CHANGE ADDRESS":
            return { ...state, address:action.payload}
        case "CHANGE PINCODE":
            return { ...state, pincode:action.payload}
            default:
                throw new Error()
    }
}

export function LoginContextProvider({children}){
    const [state,dispatch]=useReducer(reducer,initState)
    const handleSubmit=()=>{
        fetch(`http://localhost:8080/users`,{
            method: "POST",
            body: JSON.stringify(state),
            headers:{
                "Content-Type":"application/json"
            }
        })
        .then((res)=>res.json())
        .catch((error)=>console.log(error))
    }

    const { name, age ,date_of_birth,state_of_residence,address,pincode }=state
 
    return <LoginContext.Provider
     value={{name,
      age,
      date_of_birth,
      state_of_residence,
      address,
      pincode,
      dispatch,
      handleSubmit,}}>
            {children}
    </LoginContext.Provider>
}