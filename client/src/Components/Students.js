import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import cws from './fetch'

const Teachers = () => {
  const [data, setData] = useState([]);
  const navig = useNavigate();

  useEffect(() => {
    const func = async () => {

      let res = await cws(`http://localhost:5000/accounts/students`, "GET");

      if (res.status === 200) {
        res = await res.json();
        setData(res);
      } else {
        navig("/login/students");
      }
    }
    func();
  }, [])

  const update = () => {
    navig('/update/students');
  }

  const del = async () => {

    let res = await cws(`http://localhost:5000/delete/students`, "DELETE");
    if (res.status === 200) {
      alert("Deleted successfully!")
      navig('/');
    } else {
      alert("Some error occured. \n Login and try again.")
      navig('/login/students');
    }
  }

  return (
    <>
      <div id="gridContainer">
        {data.map((val, i) => {
          if (i === 0) {
            return (<div key={i}>
              <Card id={i}
                type="Standard"
                name={val.name}
                age={val.age}
                std={val.standard}
                email={val.email}
                update={update}
                delete={del} />
            </div>)
          } else {
            return (<div key={i}>
              <Card id={i}
                type="Standard"
                disp={{ display: "none" }}
                name={val.name}
                age={val.age}
                std={val.standard}
                email={val.email} />
            </div>)
          }
        })}
      </div>
    </>
  )
}

export default Teachers
