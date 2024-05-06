import { useEffect, useState } from 'react'
import '../App.css'

function Timer() {
  const [count, setCount] = useState(1)
  const[data, setData] = useState([])

  function getCookie(name) {
    let cookieArray = document.cookie.split('; ');
    let cookie = cookieArray.find((row) => row.startsWith(name + '='));
    return cookie ? cookie.split('=')[1] : null;
  }
  const token = getCookie('token')

  const fetchData = async () => {
    try {
      const header = new Headers({ "Access-Control-Allow-Origin": "*" });
  
      const response = await fetch(`http://localhost:3000/getuser/:${count}`, {
        headers: {
          "authorization": `Bearer ${token}`
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log('hi')
  
      const result = await response.json();
      console.log("res", result);
      setData(result);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };
  

  useEffect(()=>{
    fetchData();
  },[])

  const increaseCount = () =>{
    setCount(count+1)
    if (count==10){
      setCount(1);
    }
  }

  const timeout = setTimeout(increaseCount,1000)

  function stopTimer(){
    clearTimeout(timeout)
  }

  const pauseTimer = () => {
    setCount(count)
  }

  document.cookie="count="+`${count}`

  return (
    <>
      <div className='timer_container'>
        <p style={{color: count%2==0 ? 'red' : 'green'}}>{count}</p>
        <button onClick={increaseCount}>Play</button>
        <button onClick={pauseTimer}>Pause</button>
        <button onClick={stopTimer}>Stop</button>
      </div>
      <div>
        {data.map((item,index)=>{
          return (
          <div id='data_container' key={index}>
            <p>{item.ID}</p>
            <p style={{color:'white'}}>{item.Name}</p>
            <p>{item.Hobbies}</p>
          </div>
          )
        })}
      </div>
    </>
  )
}

export default Timer