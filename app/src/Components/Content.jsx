import React from 'react'
import './Content.css'
import { BASE_URL } from '../App'

const Content = ({ data }) => {

  return (
    <div className='mainbody'>

      <div className="cards">
        {
          data?.map((food) => (
            <div className="card1" key={food.name}>

              <div >
                <img src={BASE_URL + food.image } alt="Food Image" />
              
              </div>
            

              <div className="info">
                <h3>{food.name}</h3>
                <p>{food.text}</p>
                <div className="bottan">

                  <div className="btns">{food.price.toFixed(2)}</div>

                </div>
              </div>


            </div>
          ))}

      </div>
    </div>

  )
}

export default Content
