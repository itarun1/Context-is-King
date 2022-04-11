import { LoginContext } from "../Components/LoginContext"
import {useContext} from 'react'
import { useNavigate,Navigate } from "react-router-dom"

export const Login2=()=>{
    const {name,age,date_of_birth, state_of_residence,address,pincode,dispatch,handleSubmit}=useContext(LoginContext)
    const navigate=useNavigate()

    if(!name || !age || !date_of_birth){
        return <Navigate to='/registration/one'/>
    }

    return(
        <div>
            <div>
                <input type="text" placeholder="Enter Residence"
                 value={state_of_residence}
                  onChange={(e)=>dispatch({type:'CHANGE RESIDENCE', payload:e.target.value})}/>
            </div>
            <div>
            <input type="text" placeholder="Enter Address"
                 value={address}
                  onChange={(e)=>dispatch({type:'CHANGE ADDRESS',payload:e.target.value})}/>
            </div>
            <div>
            <input type="number" placeholder="Enter Pincode"
                 value={pincode}
                  onChange={(e)=>dispatch({type:'CHANGE PINCODE',payload:e.target.value})}/>
            </div>
            <div><button onClick={()=> navigate('/registration/one')}>PREVIOUS</button>
            <button
            disabled={
                !address || 
                !state_of_residence ||
                !pincode ||
                !name ||
                !age ||
                !date_of_birth
            }
            // alert('user registered')
            onClick={handleSubmit}
            
            >SUBMIT</button></div>
        </div>
    )
}    
