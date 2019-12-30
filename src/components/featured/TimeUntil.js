import React, { Component } from "react";
import Slide from "react-reveal/Slide";
export default class TimeUntil extends Component {
  state = {
    deadline: "jan, 13, 2020",
    days: "",
    hours: "",
    minutes: "",
    seconds: ""
  };

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    if (time > 0) {
      const seconds = Math.floor((time / 1000) % 60);
      const minutes = Math.floor((time / 1000 / 60) % 60);
      const hours = Math.floor((time / 1000 / 60 / 60) % 60);
      const days = Math.floor(time / 1000 / 60 / 60 / 24);

      this.setState({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      });
    } else{
      console.log("date passed")
    }
  }
  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.state.deadline), 1000);
  }

  render() {
    return (
      <Slide left delay={1000}>
        <div className="countdown_wrapper">
          <div className="countdown_top">Event start in</div>
          <div className="countdown_bottom">
            <div className="countdown_item">
              <div className="countdown_time">{this.state.days}</div>
              <div className="countdown_tag">Days</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.hours}</div>
              <div className="countdown_tag">hour</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.minutes}</div>
              <div className="countdown_tag">minute</div>
            </div>
            <div className="countdown_item">
              <div className="countdown_time">{this.state.seconds}</div>
              <div className="countdown_tag">second</div>
            </div>
          </div>
        </div>
      </Slide>
    );
  }
}
