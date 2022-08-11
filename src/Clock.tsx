import React, { useEffect } from "react";
import { useState } from "react";
import styles from './style.module.css';
interface ClockProps {
  hour: number;
  minute: number;
  second: number;
  
}


function Clock () {
 
  // # curl "http://worldtimeapi.org/api/timezone/Europe/London"
  // {
  //   "abbreviation": "BST",
  //   "client_ip": "188.240.57.124",
  //   "datetime": "2022-08-11T16:04:15.625678+01:00",
  //   "day_of_week": 4,
  //   "day_of_year": 223,
  //   "dst": true,
  //   "dst_from": "2022-03-27T01:00:00+00:00",
  //   "dst_offset": 3600,
  //   "dst_until": "2022-10-30T01:00:00+00:00",
  //   "raw_offset": 0,
  //   "timezone": "Europe/London",
  //   "unixtime": 1660230255,
  //   "utc_datetime": "2022-08-11T15:04:15.625678+00:00",
  //   "utc_offset": "+01:00",
  //   "week_number": 32
  // }
  const [time, setTime] = useState<ClockProps> ({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
   (
      fetch('http://worldtimeapi.org/api/timezone/europe/berlin')
      .then(res => res.json())
      .then(data => 
      
        {
      
          const datetime = data.datetime 
          const time = datetime.slice(11,19) 
          const hour = time.slice(0,2) 
          const minute = time.slice(3,5) 
          const second = time.slice(6,8) 
         
          setTime({ hour: parseInt(hour), minute: parseInt(minute), second: parseInt(second) })
  
        }
      )
    ) 
  }, [])


  setInterval(() => {
    fetch('http://worldtimeapi.org/api/timezone/europe/berlin')
    .then(res => res.json())
    .then(data => 
    
      {
    
        const datetime = data.datetime 
        const time = datetime.slice(11,19) 
        const hour = time.slice(0,2) 
        const minute = time.slice(3,5) 
        const second = time.slice(6,8) 
       
        setTime({ hour: parseInt(hour), minute: parseInt(minute), second: parseInt(second) })

      }
    )
  } ,1000);





       
    return (
      <>
        <div className={styles.clock}>
             <div className={styles.hour_hand}
             style={{transform : `rotateZ(${ time.hour *30}deg)`}}>

             </div>
             <div className={styles.min_hand}
             style={{transform : `rotateZ(${time.minute *6}deg)`}}>

             </div>
             <div className={styles.sec_hand}
             style={{transform : `rotateZ(${time.second *6}deg)`}}>

             </div>

             <span className={styles.twelve}>12</span>
        <span className={styles.one}>1</span>
        <span className={styles.two}>2</span>
        <span className={styles.three}>3</span>
        <span className={styles.four}>4</span>
        <span className={styles.five}>5</span>
        <span className={styles.six}>6</span>
        <span className={styles.seven}>7</span>
        <span className={styles.eight}>8</span>
        <span className={styles.nine}>9</span>
        <span className={styles.ten}>10</span>
        <span className={styles.eleven}>11</span>
         </div>

      </>
    );
  }


export default Clock
