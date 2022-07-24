import React from 'react'
import './Header.css'
import {connect} from 'react-redux'

function Header({projects}) {

  let price = projects.reduce((acc,curr) =>{
    return(
      acc += parseInt(curr.price)
    )
  },0)

  return (
    <div className ="Header">
      <div style ={{fontWeight:'bold',fontSize:'2rem'}}>
       { `Toltal projects =${projects.length},Totalbudget =${price}`}

      </div>

    </div>
  )
}

export default Header