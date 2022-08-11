import React from "react";
import styles from './style.module.css';
interface IProps {
  time: string;
}
 
class Clock extends React.Component <{}, { [key: string]: any }> {
 
  
  constructor(props:IProps){
    super(props);
    this.state = {
      time : new Date() 
    };
  }
  timeId = setInterval(() => {
    this.setState({
      time: new Date()
    });
  } , 1000);



  render() {
    return (
      <>
        <div className={styles.clock}>
             <div className={styles.hour_hand}
             style={{transform : `rotateZ(${this.state.time.getHours() *30}deg)`}}>

             </div>
             <div className={styles.min_hand}
             style={{transform : `rotateZ(${this.state.time.getMinutes() *6}deg)`}}>

             </div>
             <div className={styles.sec_hand}
             style={{transform : `rotateZ(${this.state.time.getSeconds() *6}deg)`}}>

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
}

export default Clock