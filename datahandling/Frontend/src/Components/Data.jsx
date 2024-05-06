import React, { useEffect, useState } from 'react'

export default function Data() {

  const[data, setData] = useState([])
  const [filter,setFilter] = useState('All')

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  const token = getCookie('token')

  const fetchData = async () => {
    try {
      const header = new Headers({ "Access-Control-Allow-Origin": "*" });

      const response = await fetch("http://localhost:3000/getallusers",  { 
        headers:{
          "authorization":`Bearer ${token}`
        },
       });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  useEffect(()=>{
    fetchData();
  },[])

  const filteredData = data.filter((item)=>{
    if(filter === "All"){
      return item
    }
    else if(item.Hobbies.includes(filter)){
      return item
    }
  })

  return (
    <>
    <select name="Filter" id="Hobbies" onChange={(e)=>{setFilter(e.target.value)}}>
      <option value="All">All</option>
      <option value="Poetry">Poetry</option>
      <option value="Baseball">Baseball</option>
      <option value="Reading">Reading</option>
    </select>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Hobbies</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item,index)=>(
            <tr key={index}>
              <td>{item.ID}</td>
              <td>{item.Name}</td>
              <td>{item.Hobbies}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
