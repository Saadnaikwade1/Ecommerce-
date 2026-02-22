import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Cookies from 'js-cookie'
import axios from 'axios'

function Knowmore() {
    let {pid}=useParams()
    let [con,setCon]=useState({})
    let [prod,setProd]=useState({"comm":[]})

    useEffect(()=>{
        let x=Cookies.get('lg')
        if (x!==undefined){
            setCon(JSON.parse(x))
        }
        axios.get(`http://localhost:5000/prod/${pid}`).then((res)=>{
            setProd(res.data)
            console.log(res.data)
        })
    },[])

  return (
   
    <div className="prodcard-km">
                  
    
                    <img
                      src={`http://localhost:5000/images/${prod.img}`}
                      alt={prod.title}
                     
                    />
    
                    <div className="prodcont">
                      <h2 className="title">{prod.title}</h2>
    
                       <p className="desc">
                        {prod.desc}
                      </p>
     
                      <p className="cat">Category: {prod.cat}</p>
                      <p className="price">₹{prod.price}</p>
    
                     
                      <button onClick={() => addcart(prod)}>
                        Add to Cart
                      </button>
                    </div>
                  </div>
   
  )
}

export default Knowmore
