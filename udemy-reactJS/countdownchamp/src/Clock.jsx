import React, {Component} from 'react';
import './App.css';


// @package Component - can only hold one div per component class
class Clock extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
    console.log('%cthis.props','background:#333;color:#fff;padding:2px', this.props)
  }

  // @package props - refers to some data within the application; however, you pass
  // data/state from child => parent
  render(){
    return(
      <div>
        <div className="Clock-days">{this.state.days} Days</div>
        <div className="Clock-hours">{this.state.hours} Hours</div>
        <div className="Clock-minutes">{this.state.minutes} Minutes</div>
        <div className="Clock-seconds">{this.state.seconds} Seconds</div>
      </div>
    )
  }
}

export default Clock;
