import React from 'react';
import './style.css';
import axios from 'axios';
export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          axios
            .get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
              console.log(response.data);
            });
        }}
      >
        click
      </button>
    </div>
  );
}
