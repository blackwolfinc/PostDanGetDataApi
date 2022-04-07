import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  let axios = require("axios");
  let UrlBase = "https://rent-cars-api.herokuapp.com";
//Data from Api
  const [DataGet, setDataGet] = useState(null);
  const [PostData, setPostData] = useState(null);
//Data From Page
const [Email, setEmail] = useState("")
const [Password, setPassword] = useState("")



const HandelChange = (e)=>{

  if (e.target.id === "email") {
    setEmail(e.target.value)
  } else {
    setPassword(e.target.value)
  }

}


//untuk get data
  useEffect(() => {
    let config = {
      method: "get",
      url: `${UrlBase}/admin/car`,
      headers: {},
    };

    axios(config)
      .then(function (response) {
        //Untuk Menyimpan data dari api
        setDataGet(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);



  //Untuk Post Data

  const SendData = () => {
    var data = JSON.stringify({
      email: Email,
      password: Password,
      role: "admin",
    });

    var config2 = {
      method: "post",
      url: `${UrlBase}/admin/auth/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config2)
      .then(function (response) {
        alert("data Telah Terkirim")
         console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="App">
    <br/>
    <br/>
    <br/>
    <br/>

      <input type="email" id="email" onChange={(e)=>{HandelChange(e)}} placeholder="Masukan Email"/>
      <input type="text" id="pass" onChange={(e)=>{HandelChange(e)}} placeholder="Masukan Password"/>

     

      {console.log(PostData)}
      <button
        onClick={() => {
          SendData();
        }}
      >
        Post Data
      </button>
    </div>
  );
}

export default App;
