import React, { useMemo, useState, useEffect } from "react"; // import React and React hooks: useState and useEffect
import axios from 'axios';
import Table from "./Table";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.css';

//function App() { // define functional component App
//  const [data, setData] = useState([]); // set state value to null and assign to variable data and set state function to variable setData
//  var axios_api = () => { // define axios_api function
//    var url = 'https://test-nodejs-2bcf.onrender.com'; // please change the ip address to the application host ip address
//    axios.get(url) // fetch response data via an axios call to the backend and return a promise object
//      .then(response => setData(response.data)) // on success, state function setData  is used to assign json object from the http response to the state value data
//      .catch(error => console.error(error)); // on reject, print error to console
//  }
//  useEffect(() => { // perform side effects after functional component renders the page
//    axios_api(); // execute function to make initial API call.  replace 
//    const interval = setInterval(() => { // a method to execute subsequent API call periodically every 1 minute
//      axios_api();
//    }, 60000);
//  }, []); // dependency array is empty thus run side effect only once after initial rendering
//  const styles = {
//    display: 'flex',
//    alignItems: 'center',
//    justifyContent: 'center',
//    height: '100vh',
//  };
//  return (
//    <div style={styles}>
//      <ol>
//        {data.map(element => (
//          <li key={element.id}>site name: {element.name}
//            <ul>
//              <li>url: {element.url}</li>
//              <li>status code: {element.statuscode.toString()}</li>
//              <li>time updated: {element.date}</li>
//            </ul>
//          </li>
//        ))}
//      </ol>
//    </div>
//  ); /// return state value that contains array of json object fetched through backend API and rendered it as a list
//}

const Genres = ({ values }) => {
  return (
    <>
      {values.map((genre, idx) => {
        return (
          <span key={idx} className="badge">
            {genre}
          </span>
        );
      })}
    </>
  );
};

function App() {
  const columns = useMemo(
    () => [
      {
        Header: "TV Show",
        columns: [
          {
            Header: "Name",
            accessor: "show.name",
          },
          {
            Header: "Type",
            accessor: "show.type",
          },
        ],
      },
      {
        Header: "Details",
        columns: [
          {
            Header: "Language",
            accessor: "show.language",
          },
          {
            Header: "Genre(s)",
            accessor: "show.genres",
            Cell: ({ cell: { value } }) => <Genres values={value} />  // Cell method to create a custom element 
          },
          {
            Header: "Runtime",
            accessor: "show.runtime",       
            Cell: ({ cell: { value } }) => {
              const hour = Math.floor(value / 60);
              const min = Math.floor(value % 60);
              return (
                <>
                  {hour > 0 ? `${hour} hr${hour > 1 ? "s" : ""} ` : ""}
                  {min > 0 ? `${min} min${min > 1 ? "s" : ""}` : ""}
                </>
              );
            }
          },
          {
            Header: "Status",
            accessor: "show.status",
          },
        ],
      }
    ],
    []
  );
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios("https://api.tvmaze.com/search/shows?q=snow");
      setData(result.data);
    })();
  }, []);
  return (
    <div className="App">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default App;
