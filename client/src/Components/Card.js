
import React from 'react'

const Card1 = (props) => {
  return (
    <div className="card" id="card">
      <div className="card-body">
        <p className="card-text">Name:{props.name}</p>
        <p className="card-text">{props.type}:{props.std}</p>
        <p className="card-text">Age:{props.age}</p>
        <p className="card-text">Email:{props.email}</p>

        <p className='position-absolute bottom-0 end-0' style={props.disp}>
          <button className="btn btn-outline-success btn-sm" onClick={props.update} >Update</button>
          <button className="btn btn-outline-danger btn-sm mx-2" onClick={props.delete} >Delete</button>
        </p>
      </div>
    </div>
  )
}

export default Card1
