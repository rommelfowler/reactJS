import React, {Component} from 'react';
import './App.css';

// console.log('%cYou\'re checking the Clock Component called Clock.jsx: ', 'background:#ea8181; color:whitesmoke; font-size:12px; padding:5px;');

class Clock extends Component {
  constructor(props){
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  }
  getTimeUntil(deadline){
    // console.log('%cgetTimeUntil() object in Clock.jsx', 'color:#ea8181')
    const time = Date.parse(deadline) - Date.parse( new Date() );
    // console.log('%ctime: ', 'color:#ea8181', time)

    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor((time/1000*60*60)%24);
    const days = Math.floor(time/(1000*60*60*24));
    // console.log('%cseconds: ', 'color:#ea8181', seconds);
    // console.log('%cminutes: ', 'color:#ea8181', minutes);
    // console.log('%chours: ', 'color:#ea8181', hours);
    // console.log('%cdays: ', 'color:#ea8181', days);
  }

  render() {
    this.getTimeUntil(this.props.deadline);
    return(
      <div>
        <div className="Clock-days">{this.state.days} Days</div>
        <div className="Clock-hours">{this.state.hours} Hours</div>
        <div className="Clock-minutes">{this.state.minutes} Minutes</div>
        <div className="Clock-seconds">{this.state.seconds} Seconds</div>
      </div>
    );
  }
}
export default Clock;
