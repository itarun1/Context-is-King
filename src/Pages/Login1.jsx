import { LoginContext } from "../Components/LoginContext"
import {useContext} from 'react'
import {useNavigate} from 'react-router-dom'

export const Login1=()=>{
    const { name, age ,date_of_birth,dispatch}=useContext(LoginContext)

    const navigate=useNavigate()
    
    
    return(
        <div>
            <div>
                <input type="text" placeholder="Enter Name"
                 value={name}
                onChange={(e)=>dispatch({type:'CHANGE NAME', payload:e.target.value})}/>
            </div>
            <div>
            <input type="number" placeholder="Enter Age"
                 value={age}
                onChange={(e)=>dispatch({type:'CHANGE AGE',payload:e.target.value})}/>
            </div>
            <div>
            <input type="number" placeholder="Enter DOB"
                 value={date_of_birth}
                onChange={(e)=>dispatch({type:'CHANGE DOB',payload:e.target.value})}/>
            </div>
            <div><button
             onClick={()=>{
                navigate('/home')
            }}
            >PREVIOUS</button>
            <button
            disabled={!name && !age && !date_of_birth}
            onClick={()=>{
                navigate('/registration/two')
            }}
            >NEXT</button></div>
        </div>
    )
}    