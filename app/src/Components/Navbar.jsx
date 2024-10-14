import React from 'react'
import './Navbar.css'

const Navbar =( {searchData , filterFood})=> {
 

  return (
    <div className='Nav'>
      <div className="logo">
        <img src=".\public\logo.svg" className='logoimg' alt="Logo" />
      </div>
      <div className="menu">
        <div >
            <button onClick={ ()=>filterFood("all")} className='all'>All</button>
            <button onClick={ ()=>filterFood("breakfast")} className='breakfast'>Breakfast</button>
            <button onClick={ ()=>filterFood("lunch")} className='lunch'>Lunch</button>
            <button onClick={ ()=>filterFood("dinner")} className='lunch'>Dinner</button>

        </div>
      </div>
      <div className='input' >
        <input onChange={searchData} className="search" type="text" placeholder='  Search Here...'/> 
      </div>
    </div>
  )
}

export default Navbar
