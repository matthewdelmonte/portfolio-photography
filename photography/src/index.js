import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './components/Button/button';
import ImageCard from './components/Card/card'

function App() {
  const mystyle = {
      backgroundColor: "lightblue",
      padding: "10px",
      fontFamily: "Arial"
    };

  return (
    <div style={mystyle}> 
      <h1>Hello Caleb</h1>
      <ImageCard />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

