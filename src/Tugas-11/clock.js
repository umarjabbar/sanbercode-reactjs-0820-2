import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      waktu : ""
    }
  }

  componentDidMount() {
    this.addInterval = setInterval(() => this.jam(), 1000);
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  jam() {
    let hari = new Date();
    let jam = hari.getHours();
    let menit = hari.getMinutes();
    let detik = hari.getSeconds();
    let format;
    
    if (jam == 0) jam = jam + 12;
    if (jam > 12) jam = jam - 12; format = "AM";
    if (jam < 10) jam = "0" + jam;
    if (jam <= 12) format = "PM";
    if (menit < 10) menit = "0" + menit;
    if (detik < 10) detik = "0" + detik;

    let output = `${jam}:${menit}:${detik} ${format}`;
    this.setState(() => ({
        waktu: output
    }))
  }

  render() {
    return (
      <h1>Sekarang jam : {this.state.waktu}</h1>
    )
  }
}

export default Clock;