import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1>Contact Us Page </h1>
    </div>
  )
}

export default Contact

// import { useState, useEffect } from "react";

//  function Contact() {
//   const [data ,setData ]= useState([{}]);

//   useEffect(() => {
//     callApi();
//   }, []);

//   const callApi = async () => {
//     const apiData = await fetch("https://jsonplaceholder.typicode.com/users");
//    const json =  await apiData.json();
//     setData(json)
//   };
//   console.log(data)

//   return (
//     <div className="App">
//       {Object.values(data).map((item) => <div className="flex m-2 p-2">
//         <h1>Serial Number : {item.id}</h1>
//       <li>Name : {item.name}</li>
//       <li>Eamil: {item.email}</li>
//       <li>address: {item.address.street}</li>
//       <li>website: {item.website}</li><br/>
//         </div> 
                                         
//       )}
//     </div>
//   );
// }

// export default Contact;
