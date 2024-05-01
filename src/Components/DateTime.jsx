import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");
  const [time, setTime] = useState("");
  const getDateTime = () => {
    const today = new Date();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = today.getDate();
    let hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();

    // Convert hours to 12-hour format
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // 0 should be converted to 12

    const formattedDateTime = `${month}-${date}-${year}`;
    const getCurrentTime = `${hours}:${minutes}:${seconds} ${ampm}`;
    setCurrentDateTime(formattedDateTime);
    setTime(getCurrentTime);
  };

  useEffect(() => {
    let interval = setInterval(() => {
      getDateTime();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h1 className="font-light">DateTime:</h1>
      <b>
        {currentDateTime} ,{time}
      </b>
    </div>
  );
};

export default DateTime;
