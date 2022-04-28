import React, { useState } from "react";
import { useNavigate } from "react-router";

export const LoginPage = () => {
  let axios = require("axios");
  let navigate = useNavigate();

  // untuk menyimpan Data Value
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Host, setHost] = useState(process.env.REACT_APP_HOST);
  
  // Hadle Untuk Menghandle setiap Perubahan
  const handleChange = (event) => {
    // kondisonal

    if (event.target.id === "email") {
      setEmail(event.target.value);
    } else {
      setPassword(event.target.value);
    }
  };

  const handleSubmit = () => {
    // data yang akan di kirimkan
    let data = {
      username: Email,
      password: Password,
    };
    // Config Pengiriman
    var config = {
      method: "post",
      url: `${Host}/api/member/login`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    // Config di jalankan
    axios(config)
      .then(function (response) {
        // ketika dia berhasil dan tidak ada eror
        console.log(response)
        sessionStorage.setItem("Token", response.data.result.token)
        navigate(`/User`);
        alert(response.data.message)
      })
      .catch(function (error) {
        // Ketika dia tidak berhasil / eror
        console.log(error)
        // alert("Username / Password Salah");
      });
  };


  return (
    <div>
      <h1>Email</h1>
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        id="email"
        type="text"
      ></input>
      <h1>Password</h1>
      <input
        onChange={(e) => {
          handleChange(e);
        }}
        id="pass"
        type="password"
      ></input>
        <br/>  <br/>
      <button
        onClick={() => {
          handleSubmit();
        }}
      >
        {" "}
        Login
      </button>
        <br/>
        <br/>

      <button onClick={()=>{navigate(`/Register`)}}> Register </button>
    </div>
  );
};
