import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './components/Button/button';

function App() {
  return (
    <> 
      <h1>Hello Caleb</h1>
      <MyButton />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

