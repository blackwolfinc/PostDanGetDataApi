import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

export const UsePage = () => {
  let navigate = useNavigate();

const [Token, setToken] = useState(sessionStorage.getItem("Token"))




useEffect(() => {
if(!Token){
  navigate(`/`);
}
}, [])



  return (
    <div>UsePage</div>
  )
}
