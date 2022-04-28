import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

export const UsePage = () => {
  let navigate = useNavigate();
  let axios = require("axios");
  const [Host, setHost] = useState(process.env.REACT_APP_HOST);

  const [Token, setToken] = useState(sessionStorage.getItem("Token"));

  // useEffect(() => {
  // if(!Token){
  //   navigate(`/`);
  // }
  // }, [])

  useEffect(() => {
    LoadData();
    // if (Token) {
    //   LoadData()
    // }
  }, []);

  const LoadData = () => {
    var config = {
      method: "get",
      url: `${Host}/api/member/show-profile`,
      headers: {
        Authorization: Token,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        if (response.data.message === "Failed to authenticate token") {
          navigate(`/`);
          alert("Token Expaired");
        }
      })
      .catch(function (error) {
        navigate(`/`);
        alert("Token Expaired");
      });
  };

  return (
    <div>
      {sessionStorage.getItem("Token")}
      <br />
      UsePage
    </div>
  );
};
