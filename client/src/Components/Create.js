import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import cws from './fetch';

const Create = () => {
  const para = useParams();
  const [data, setData] = useState({});
  const navig = useNavigate();
  const [toggle, setToggle] = useState();

  const handleData = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setData({ ...data, [name]: value })
  }

  const create = async (e) => {
    e.preventDefault();
    if (data.pass !== data.cpass) {
      alert("Passwords does not match");
      return;
    }

    let res = await cws(`http://localhost:5000/create/${para.user}`, "POST", data);

    if (res.status === 201) {
      alert("Account created. Login");
      navig(`/login/${para.user}`)
    } else {
      alert("Email already exists!");
    }
  }

  useEffect(() => {
    if (para.user === "students") {
      setToggle("standard");
    } else {
      setToggle("subject");
    }
  })



  return (
    <div id="page">
      <div id="one"></div>
      <form className="mx-3 my-5" onSubmit={create}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input onChange={handleData} value={data.name} type="text" className="form-control" id="name" required />

        </div>
        <div className="mb-3">
          <label className="form-label" id="subj">{toggle}</label>
          <input onChange={handleData} value={data[toggle]} type="text" className="form-control" id={toggle} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Age</label>
          <input onChange={handleData} value={data.age} type="number" className="form-control" id="age" required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input onChange={handleData} value={data.email} type="email" className="form-control" id="email" required />
        </div>
        <div className="form-group mb-3">
          <label className="form-label">Password</label>
          <input type="password" value={data.pass} onChange={handleData} className="form-control" placeholder="Password" id="pass" required />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Confirm Password</label>
          <input type="password" value={data.cpass} onChange={handleData} className="form-control" placeholder="Password" id="cpass" required />
        </div>

        <button type="submit" className="btn btn-primary" id="btnColor">Submit</button>
        <button className="btn btn-danger mx-2 my-3" onClick={() => navig(`/login/${para.user}`)}>Cancel</button>

      </form>
      <div id="two"></div>
    </div>
  )
}

export default Create