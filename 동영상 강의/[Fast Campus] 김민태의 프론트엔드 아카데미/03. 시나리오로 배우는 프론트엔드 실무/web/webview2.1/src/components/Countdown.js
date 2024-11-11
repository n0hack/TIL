import React from 'react';

const CD = ({ assert, unit }) => !!assert ? <>{`${assert}${unit}`}</> : null;

export class Countdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      interval: null,
      countDown: 0,
      countDownDate: new Date(props.targetDate).getTime(),
    }
  }

  componentDidMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          countDown: this.state.countDownDate - new Date().getTime(),
        });
      }),
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  getReturnValues() {
    const hours = Math.floor(
      (this.state.countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((this.state.countDown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((this.state.countDown % (1000 * 60)) / 1000);
  
    return [hours, minutes, seconds];  
  }

  render() {
    const [hours, minutes, seconds] = this.getReturnValues();

    return (
      <div>
        <CD assert={hours} unit='시간'/>
        <CD assert={minutes} unit='분'/>
        <CD assert={seconds} unit='초전...'/>
      </div>
    )  
  }
}
