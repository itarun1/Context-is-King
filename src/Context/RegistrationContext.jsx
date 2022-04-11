import React from 'react'

export const RegistrationContext=React.createContext()

const initState={
    name:"",
    age:"",
    dateOfBirth:"",
    stateofResidence:"",
    address:"",
    pincode:""
};
function reducer(state,action){
    switch(action.type)
    {
        case "CHANGE_NAME":
            return{...state,name:action.payload};
            case "CHANGE_AGE":
            return{...state,age:action.payload};
            case "CHANGE_DATE_OF_BIRTH":
                return{...state,dateOFBirth:action.payload};
         case "CHANGE_STATE_OF_RESIDENCE":
             return{...state,stateofResidence:action.payload};
             case "CHANGE_ADDRESS":
             return{...state,address:action.payload};
             case "CHANGE_PINCODE":
                return{...state,pincode:action.payload};
    default:
        throw new Error()  
            }
}
export const RegistrationContextProvider=({children})=>{
    const [state,dispatch]=React.useReducer(reducer,initState);
    const handleSubmit=()=>{
    fetch('  http://localhost:8080/users',{
        method:"POST",
        body:JSON.stringify(state),
    headers:{
        "Content-Type":"application/json"
    }   
}).then((res)=>res.json())
.catch((error)=>console.log(error))
const{name,age,dateOfBirth,stateofResidence,address,pincode}=state;
return(
    <RegistrationContext.Provider
    value={{
        name,
        age,
        dateOfBirth,
        stateofResidence,
        address,
        pincode,
        dispatch,handleSubmit
    }}
>
{children}
</RegistrationContext.Provider>
);
    }
}