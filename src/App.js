import { useState, useEffect } from 'react'; // import React and React hooks: useState and useEffect
import axios from 'axios';
import Table from "./Table";

function App() { // define functional component App
  const [data, setData] = useState([]); // set state value to null and assign to variable data and set state function to variable setData
  var axios_api = () => { // define axios_api function
    var url = 'https://test-nodejs-2bcf.onrender.com'; // please change the ip address to the application host ip address
    axios.get(url) // fetch response data via an axios call to the backend and return a promise object
      .then(response => setData(response.data)) // on success, state function setData  is used to assign json object from the http response to the state value data
      .catch(error => console.error(error)); // on reject, print error to console
  }
  useEffect(() => { // perform side effects after functional component renders the page
    axios_api(); // execute function to make initial API call.  replace 
    const interval = setInterval(() => { // a method to execute subsequent API call periodically every 1 minute
      axios_api();
    }, 60000);
  }, []); // dependency array is empty thus run side effect only once after initial rendering
  const styles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  };
  return (
    <div style={styles}>
      <ol>
        {data.map(element => (
          <li key={element.id}>site name: {element.name}
            <ul>
              <li>url: {element.url}</li>
              <li>status code: {element.statuscode.toString()}</li>
              <li>time updated: {element.date}</li>
            </ul>
          </li>
        ))}
      </ol>
    </div>
  ); /// return state value that contains array of json object fetched through backend API and rendered it as a list
}

function Bpp() {
  return (<p>This is my second function</p>);
} /

//export default App; // exports the App functinoal component
export App;
export Bpp;
