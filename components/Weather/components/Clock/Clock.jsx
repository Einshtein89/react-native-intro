import { s } from "./Clock.style";
import { Txt } from "../Txt/Txt";
import { nowToHHMM } from "../../utils/date-time";
import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(nowToHHMM());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(nowToHHMM());
    }, 1000);

    //need to be here so that setInterval is not running after component removed
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  return (
    <>
      <Txt style={s.time}>{time}</Txt>
    </>
  );
};
