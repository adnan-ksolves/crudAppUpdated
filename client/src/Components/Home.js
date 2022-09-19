import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const [style, setStyle] = useState({ backgroundColor: "teal", color: "white" });
  const navig = useNavigate();

  return (
    <>

      <div className="text-center my-5"><button type="button" className="btn btn-block w-50 my-2" style={style} onClick={() => navig("/login/teachers")}>Teachers</button></div>
      <div className="text-center my-5"><button type="button" className="btn btn-block w-50 my-2" style={style} onClick={() => navig("/login/students")}>Students</button></div>

    </>
  )
}

export default Home
