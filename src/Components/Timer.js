
import React from 'react';
import { useState, useEffect } from 'react';
import { Navigate ,useNavigate} from "react-router";
const Timer = () => {
  var axios = require('axios');
  const navigate=useNavigate();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  var deadline = "December, 31, 2022";
  useEffect(() => {
    const loadData = async () => {
      var config = {
        method: 'get',
        url: `https://admin.ncc.pictieee.in/NCC/time`,
        // headers: {
        //     'Authorization': `${token}`
        // }
    };

    const time = await axios(config)
    //   .catch(function (error) {
    //       console.log(error);
    //     });
    // console.log('time', time.data.end_time)
    deadline=time.data.end_time;
    const tx = Date.parse(deadline) - Date.now();
    const tx2=Date.parse(time.data.start_time)-Date.now();
    if(tx2>0){
      alert("Contest Not Started!")
      navigate("/");
    }
    // console.log(time.data.end_time);
    // localStorage.setItem('h',2);
    }
    loadData();
  }, []);


  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();
    if(time<0){
      console.log('timer ended');
      
      // navigate("/result");
      window.location.pathname="/result";
    }
    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => {console.log("time end");clearInterval(interval);};
  }, []);

  return (
    <div className="timer">
       {hours}:{minutes}:{seconds}
    </div>
  );
};

export default Timer;