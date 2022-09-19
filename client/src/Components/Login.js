import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import cws from './fetch';

const Login = () => {
  const para = useParams();
  const navig = useNavigate();
  const [data, setData] = useState({});

  const handleData = (e) => {
    const x = e.target.id;
    const y = e.target.value;
    setData({ ...data, [x]: y });
  }

  const login = async (e) => {
    e.preventDefault();

    let res = await cws(`http://localhost:5000/login/${para.user}`, "POST", data);

    if (res.status === 200) {
      res = await res.json();
      navig(`/${para.user}/account/${res.name}`);
    } else {
      alert("Invalid Credentials");
    }
  }


  return (
    <div id="page">
      <div id="one"></div>
      <form className='mx-3 my-5'>
        <div className="form-group mb-3">
          <label className="form-label">Email</label>
          <input type="email" id="email" value={data.email} onChange={handleData} className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group mb-4">
          <label className="form-label">Password</label>
          <input type="password" id="pass" value={data.pass} onChange={handleData} className="form-control" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-success" onClick={login} id="btnColor">Login</button>
        <button type="submit" className="btn btn-primary mx-2" onClick={() => navig(`/create/${para.user}`)} id="btnColor">Create</button>
      </form>
      <div id="two"></div>
    </div>
  )
}

export default Login
