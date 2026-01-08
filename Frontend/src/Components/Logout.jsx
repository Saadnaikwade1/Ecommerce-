import React, { useContext, useEffect, useState } from 'react'
import Context from './Context'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function Logout() {
    let user=useContext(Context)
    let navigate=useNavigate()
    useEffect(()=>{
    user.updState({"token":"","name":"","uid":"","role":""})
    Cookies.remove("lg")
    navigate("/login")
    },[])
    

    return (
        <div>Logout</div>
    )
}

export default Logout
