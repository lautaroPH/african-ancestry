'use client';
import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const initialTime = 13 * 3600 + 30 * 60 + 15;
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return {
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
  };

  const updateCountdown = () => {
    if (timeRemaining > 0) {
      setTimeRemaining(timeRemaining - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const { hours, minutes, seconds } = formatTime(timeRemaining);

  return (
    <div className="flex items-center gap-2">
      <div className="flex flex-col items-center justify-center bg-[#352f8514] rounded-md px-3 py-1">
        <p className="text-2xl font-bold text-purple-light">0</p>
        <p className="text-xs text-purple-secondary">Days</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#352f8514] rounded-md px-3 py-1">
        <p className="text-2xl font-bold text-purple-light">{hours}</p>
        <p className="text-xs text-purple-secondary">Hours</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#352f8514] rounded-md px-3 py-1">
        <p className="text-2xl font-bold text-purple-light">{minutes}</p>
        <p className="text-xs text-purple-secondary">Mins</p>
      </div>
      <div className="flex flex-col items-center justify-center bg-[#352f8514] rounded-md px-3 py-1">
        <p className="text-2xl font-bold text-purple-light">{seconds}</p>
        <p className="text-xs text-purple-secondary">Secs</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
