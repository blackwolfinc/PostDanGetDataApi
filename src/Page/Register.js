import React, { useState } from "react";

export const Register = () => {
  // "username": "shiroremi",
  // "email": "shiroremi27@gmail.com",
  // "password": "shiroremi2704",
  // "fullName": "Shiro Remi",
  // "address": "Dumai",
  // "phone": "082278001173",
  // "gender": "Male"

  const [Username, setUsername] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Fullname, setFullname] = useState("");
  const [Address, setAddress] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState(null);
  const [Gender, setGender] = useState("");
  const [Host, setHost] = useState(process.env.REACT_APP_HOST);


const onSubmit =()=>{
var axios = require('axios');
var data = JSON.stringify({
  "username":Username,
  "email": Email,
  "password":Password,
  "fullName": Fullname,
  "address": Address,
  "phone": PhoneNumber,
  "gender": Gender
});

var config = {
  method: 'post',
  url: `${Host}/api/member/create-member`,
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

}


  return (
    <div>
      <h3>Username</h3>
      <input onChange={(e)=>{setUsername(e.target.value)}} type="text" />

      <h3>Email</h3>
      <input  onChange={(e)=>{setEmail(e.target.value)}} type="email" />

      <h3>Password</h3>
      <input onChange={(e)=>{setPassword(e.target.value)}} type="password" />

      <h3>Fullname</h3>
      <input onChange={(e)=>{setFullname(e.target.value)}}  type="text" />

      <h3>Address</h3>
      <textarea onChange={(e)=>{setAddress(e.target.value)}}  type="text" />

      <h3>PhoneNumber</h3>
      <input onChange={(e)=>{setPhoneNumber(e.target.value)}}  type="number" />

      <h3>Gender</h3>
      <select onChange={(e)=>{setGender(e.target.value)}}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>

      <button onClick={()=>{onSubmit()}}>submit </button>
    </div>
  );
};
