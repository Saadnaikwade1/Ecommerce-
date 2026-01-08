import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <div className='sub-menu'>
                <Link to={"/"}>All</Link>
                <Link to={"/mobiles"}>Mobiles</Link>
                <Link to={"/computers"}>Computers</Link>
                <Link to={"/gadgets"}>Gadgets</Link>
                <Link to={"/Others"}>Others</Link>
            </div>
            <div className='outlet-div'>
                <Outlet/>
            </div>
        
        </div>
    )
}

export default Home
