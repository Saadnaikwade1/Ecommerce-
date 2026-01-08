import React, { useContext } from 'react'
import {Link} from "react-router-dom"
import Context from './Context'
function Navbar() {
    let user=useContext(Context)
    return (
        <div className='nav'>
           <Link to={"/"}>Product</Link>

            {user.state.token!="" &&user.state.role=="admin" && <Link to='/addprod'>addprod</Link>}
            {user.state.token=="" && <Link to='/login'>Login</Link>}
           { user.state.token==""&& <Link to='/reg'>Register</Link>}
           {user.state.token!=""&& <Link to='/logout'>Logout</Link>}
        </div>
    )
}

export default Navbar
