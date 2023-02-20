import React, {useState, useRef, useEffect} from 'react';
import { background } from "../assets/export_image.js";
import {IoIosCalendar} from "react-icons/io";
import "../style/glass.css";

const Event = () => {
  const [timerDays,setTimerDays]=useState('00');
  const [timerHours,setTimerHours]=useState('00');
  const [timerMinutes,setTimerMinutes]=useState('00');
  const [timerSeconds,setTimerSeconds]=useState('00');

  let interval=useRef();

  const startTimer=()=>{
    const countdownDate=new Date('February 28, 2023 00:00:00').getTime();

    interval=setInterval(()=>{
      const now=new Date().getTime();
      const distance=countdownDate-now;

      const days=Math.floor(distance/(1000*60*60*24));
      const hours=Math.floor((distance%(1000*60*60*24) / (1000*60*60) ));
      const minutes=Math.floor((distance%(1000*60*60)) / (1000*60));
      const seconds=Math.floor((distance%(1000*60))/1000);

      if(distance<0){
        clearInterval(interval.current);
      }else{
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000);

  };

  useEffect(()=>{
    startTimer();
    return ()=>{
      clearInterval(interval.current);
    }
  })

  return (
    <div
      className="w-full h-[100vh] bg-cover bg-center flex flex-wrap items-center justify-around"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className='flex justify-center items-center flex-col glass'>
        <IoIosCalendar
          className='text-[200px] text-golden'
        />
        <div className='flex items-center justify-center flex-col font-poppins text-white font-bold'>
          <p>Saturday 28 February 2023</p>
          <p>07.00 - 15.00 WIB</p>
          <p>GRAHA WISMA</p>
        </div>
      </div>

      <div className='text-white font-poppins font-bold text-center glass p-[5px] md:p-[30px]'>
        <h1
          className='text-[30px] text-golden'
        >COUNTDOWN</h1>

        <div className='flex gap-3 text-[15px] md:text-[20px] mt-[50px]'>
          <div
            className='flex flex-col items-center justify-center'
          >
            <p>{timerDays}</p>
            <p><small>Days</small></p>
          </div>
          <span>:</span>
          <div
            className='flex flex-col items-center justify-center'
          >
            <p>{timerHours}</p>
            <p><small>Hours</small></p>
          </div>
          <span>:</span>
          <div
            className='flex flex-col items-center justify-center'
          >
            <p>{timerMinutes}</p>
            <p><small>Minutes</small></p>
          </div>
          <span>:</span>
          <div
            className='flex flex-col items-center justify-center'
          >
            <p>{timerSeconds}</p>
            <p><small>Seconds</small></p>
          </div>
        </div>
      </div>

      <div className='w-[300px] h-[300px] rounded-xl glass flex flex-col items-center justify-center gap-1'>
        
        <a href="https://goo.gl/maps/SNERtrsejAUX9Xx8A" className='text-golden'>
          <p className='text-golden font-poppins font-bold'>View on Google Maps</p>  
        </a>
        
        <iframe 
          width="250px" 
          height="250px" 
          id="gmap_canvas" 
          src="https://maps.google.com/maps?q=wisma haji metro&t=&z=15&ie=UTF8&iwloc=&output=embed"
          >
        </iframe>

      </div>
      
    </div>
  )
}

export default Event
