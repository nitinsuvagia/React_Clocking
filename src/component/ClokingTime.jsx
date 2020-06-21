import React from 'react';

export default class ClockingTime extends React.Component{
    constructor(){
        super();
        this.state = this.InitialTime;
    }

    InitialTime = {
        currentTime : new Date().toLocaleTimeString()
    }

    changingTime = () => {
        this.setState({currentTime:new Date().toLocaleTimeString()})
    }

    render(){
        // eslint-disable-next-line
        {setInterval(this.changingTime,1000)}
        return <div>
            Class-Function Timing : 
            {this.state.currentTime}
        </div>
    }
}