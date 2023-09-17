import React, { useEffect, useState } from 'react';
import { CardContainer, TimeCard } from './Timer.styles';

interface ITimerInterface {
    targetDate?: Date;
    className?: string;
}

type TimeLeft = {
    Day: number;
    Hour: number;
    Min: number;
    Sec: number;
  }

const today = new Date()
const defaultDate = new Date(today);
defaultDate.setDate(today.getDate() + 5);


const Timer: React.FC<ITimerInterface> = ({ targetDate, className }) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

    function calculateTimeLeft(): TimeLeft {
    const now = new Date();
    const difference = (targetDate as Date).getTime() - now.getTime();

    if (difference <= 0) {
    // Target date has passed
    return {
        Day: 0,
        Hour: 0,
        Min: 0,
        Sec: 0,
    };
    }

    const Day = Math.floor(difference / (1000 * 60 * 60 * 24));
    const Hour = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const Min = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const Sec = Math.floor((difference % (1000 * 60)) / 1000);

    return { Day, Hour, Min, Sec };
}

    useEffect(() => {
      const interval = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);
  
      return () => clearInterval(interval);
    }, [targetDate]);

  return (
      <CardContainer className={className}>
        {Object.entries(timeLeft).map(([unit, value]) => (
            <TimeCard key={unit}>
              <span>{value}</span>
              <span>{unit}</span>
            </TimeCard>
        ))}
    </CardContainer>
  );
};

Timer.defaultProps = {
    targetDate: defaultDate,
};

export default Timer;
