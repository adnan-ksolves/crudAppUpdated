import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import cws from './fetch';

const Update = () => {
  const [toggle, setToggle] = useState();
  const [data, setData] = useState({});
  const navig = useNavigate();
  const para = useParams();

  useEffect(() => {
    const func = async () => {

      let res = await cws(`http://localhost:5000/getData/${para.user}`, "GET");

      if (res.status == 200) {
        res = await res.json();
        setData(res);
      } else {
        alert("Error! Login and try again.")
        navig(`/login/${para.user}`)
      }
    }

    func();

    if (para.user === "students") {
      setToggle("standard");
    } else {
      setToggle("subject");
    }

  }, [])

  const handleData = (e) => {
    const name = e.target.id;
    const value = e.target.value;
    setData({ ...data, [name]: value});
  }

  const submit = async (e) => {
    e.preventDefault();

    let res = await cws(`http://localhost:5000/update/${para.user}`, "PUT", data);

    if (res.status === 200) {
      alert("Updated successfully.")
      navig(-1);
    } else {
      alert("Error! Login and try again.")
      navig(`/login/${para.user}`)
    }
  }

  const back = (e) => {
    e.preventDefault();
    navig(-1);
  }

  return (
    <div id="page">
      <div id="one"></div>
      <form className="mx-3 my-5" onSubmit={submit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input onChange={handleData} value={data.name} type="text" className="form-control" id="name" aria-describedby="emailHelp" required />

        </div>
        <div className="mb-3">
          <label className="form-label" id="subj">{toggle}</label>
          <input onChange={handleData} value={data[toggle]} type="text" className="form-control" id={toggle} required />
        </div>
        <div className="mb-3">
          <label for="Age" className="form-label">Age</label>
          <input onChange={handleData} value={data.age} type="text" className="form-control" id="age" required />
        </div>
        <div className="mb-3">
          <label for="Email" className="form-label">Email</label>
          <input onChange={handleData} value={data.email} type="email" className="form-control" id="email" required />
        </div>

        <button type="submit" className="btn btn-primary" id="btnColor">Update</button>
        <button className="btn btn-danger mx-2" onClick={back}>Cancel</button>

      </form>
      <div id="two"></div>
    </div>
  )
}

export default Update
