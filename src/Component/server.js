import axios from "axios";
 
// Set the URL to access
let Username="Saurabh Singh";
let Email = "SaurabhSingh2345@gmail.com";
let Password = "SS12345";
let ConfirmPassword = "SaurabhSingh2345@gmail.com";
let url =
  `https://localhost:3000/Register` +
  `Username=${Username}&Email=${Email}&Password=${Password}&ConfirmPassword=${ConfirmPassword}`;
/*
| Perform the HTTP get request via Axios
| It returns a Promise immediately,
| not the response
*/
axios.get('https://localhost:3000/Register')
  .then((response) => {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
    console.log("User added successfully");
  });
const request = axios.get(url);
/*
| For waiting the Promise is fulfilled
| with the Response use the then() method.
| If the HTTP request received errors
| use catch() method
*/
request
  .then((response) => {
    console.info(response.data.story);
    console.log("User added successfully");
  })
  .catch((error) => {
    console.err(error);
  });