import React from 'react'

const Greetings_and_Weather = ({Weather, Name, illness, temp, cond}) => {
  let content;
  if (illness === "False") {
    content = (
      <header style={{textAlign: 'center', marginTop: '20px'}}>
        <h1>Welcome {Name}</h1>
        <h2>Today's Weather is {Weather}</h2>
        <h2>Temperature is {temp}</h2>
        <h2>Condition is {cond}</h2>
      </header>
    );
  } else {
    content = (
      <header style={{textAlign: 'center', marginTop: '20px'}}>
        <h1>Welcome {Name}</h1>
        <h2>Today's Weather is {Weather}</h2>
        <h2>Temperature is {temp}</h2>
        <h2>Condition is {cond}</h2>
        <h2>You are not well, please take care!</h2>
      </header>
    );
  }
  return content;
}
    



export default Greetings_and_Weather;