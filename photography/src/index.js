import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './components/Button/button';
import ImageCard from './components/Card/card'

function App() {
  return (
    <> 
      <h1>Hello Caleb</h1>
      <ImageCard />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

