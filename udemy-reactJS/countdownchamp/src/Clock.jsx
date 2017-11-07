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
  // @name: lifecycle Hooks
  // @package componentWillMount - hook that runs before the component completely
  // renders on the app.
  componentWillMount(){
    console.log("%ccomponentWillMount()", 'background:#346e34;color:#fff;padding:2px')
    this.getTimeUntil(this.props.deadline);
  }
  // @package componentDidMount() runs after the componenet has completely renders
  // on the app.
  componentDidMount() {
    console.log("%componentDidMount()", 'background:#346e34;color:#fff;padding:2px')
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }
  // @name: Adding a leading helper method
  // @package - if num < 10 return 0 string + num
  leading0(num) {
    // @package terniary expression
    // @package (?) - if true
    // @package (:) - else do next expression
    return num < 10 ? '0'+num : num;
  }
  getTimeUntil(deadline) {
    const time = Date.parse(deadline)- Date.parse(new Date());
    const days = Math.floor(time/(1000*60*60*24));
    const minutes = Math.floor((time/1000/60)%60);
    const seconds = Math.floor((time/1000)%60);
    const hours = Math.floor((time/(1000*60*60) %24 ));

    console.log("%cgetTimeUntil()", 'background:#333;color:#fff;padding:2px')
    console.log("%cdays: ", 'background:#333;color:#fff;padding:2px', days)
    console.log("%cminutes: ", 'background:#333;color:#fff;padding:2px', minutes)
    console.log("%cseconds: ", 'background:#333;color:#fff;padding:2px', seconds)
    console.log("%chours: ", 'background:#333;color:#fff;padding:2px', hours)

    // See lifecycle methods to fix infinite loop
    this.setState({
      days,
      hours,
      minutes,
      seconds
    })
  }
  // @package props - refers to some data within the application; however, you pass
  // data/state from child => parent
  render(){
    return(
      <div>
        <div className="Clock-days">{this.leading0(this.state.days)} Days</div>
        <div className="Clock-hours">{this.leading0(this.state.hours)} Hours</div>
        <div className="Clock-minutes">{this.leading0(this.state.minutes)} Minutes</div>
        <div className="Clock-seconds">{this.leading0(this.state.seconds)} Seconds</div>
      </div>
    )
  }
}

export default Clock;
