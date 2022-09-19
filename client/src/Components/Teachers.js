import React, { useEffect, useState } from 'react'
import Card from './Card'
import { useNavigate } from 'react-router-dom'
import cws from './fetch'


const Teachers = () => {
  const [data, setData] = useState([]);
  const navig = useNavigate();

  useEffect(() => {
    const func = async () => {
      let res = await cws(`http://localhost:5000/accounts/teachers`, "GET");

      if (res.status === 200) {
        res = await res.json();
        setData(res);
      } else {
        navig("/login/teachers");
      }
    }
    func();
  }, [])

  const update = () => {
    navig('/update/teachers');
  }

  const del = async () => {

    let res = await cws(`http://localhost:5000/delete/teachers`, "DELETE");

    if (res.status === 200) {
      alert("Deleted successfully!")
      navig('/');
    } else {
      alert("Some error occured. \n Login and try again.")
      navig('/login/teachers');
    }
  }


  return (
    <>
      <div id="gridContainer">
        {data.map((val, i) => {
          if (i === 0) {
            return (<div key={i}>
              <Card id={i}
                type="Subject"
                name={val.name}
                age={val.age}
                std={val.subject}
                email={val.email}
                update={update}
                delete={del} />
            </div>)
          } else {
            return (<div key={i}>
              <Card id={i}
                type="Subject"
                disp={{ display: "none" }}
                name={val.name}
                age={val.age}
                std={val.subject}
                email={val.email} />
            </div>)
          }
        })}
      </div>
    </>
  )
}

export default Teachers
