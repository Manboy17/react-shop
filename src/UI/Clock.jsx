import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import "../styles/Clock.css";

const Clock = () => {
  // const [days, setDays] = useState("00");
  // const [hours, setHours] = useState("00");
  // const [minutes, setMinutes] = useState("00");
  // const [seconds, setSeconds] = useState("00");

  // let interval;

  // const countDown = () => {
  //   const destination = new Date("Jan 10 2023").getTime();

  //   interval = setInterval(() => {
  //     const now = new Date().getTime();
  //     const different = destination - now;

  //     const days = Math.floor(different / (1000 * 60 * 60 * 24));

  //     const hours = Math.floor(
  //       (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //     );

  //     const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));

  //     const seconds = Math.floor((different % (1000 * 60)) / 1000);

  //     if (destination < 0) clearInterval(interval.current);
  //     else {
  //       setDays(days);
  //       setHours(hours);
  //       setMinutes(minutes);
  //       setSeconds(seconds);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   countDown();

  //   return () => {
  //     clearInterval(interval.current);
  //   };
  // }, []);
  return (
    <div className="timer__wrapper d-flex align-items-center gap-3">
      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">00</h1>
          <h5 className="text-white fs-6">days</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">00</h1>
          <h5 className="text-white fs-6">hours</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2">00</h1>
          <h5 className="text-white fs-6">minutes</h5>
        </div>
        <span className="text-white fs-3">:</span>
      </div>

      <div className="clock__data d-flex align-items-center gap-3">
        <div className="text-center">
          <h1 className="text-white fs-3 mb-2 ">00</h1>
          <h5 className="text-white fs-6">seconds</h5>
        </div>
      </div>
    </div>
  );
};

export default Clock;
