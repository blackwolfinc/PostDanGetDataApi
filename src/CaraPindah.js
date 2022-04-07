import React, { useState } from "react";

export const CaraPindah = () => {
  const [ParameterPindah, setParameterPindah] = useState(1);

  const [Name, setName] = useState("")
   const [Id, setId] = useState("")

  let dataDummy = [
    {
      id: 2,
      name: "APV",
      category: "medium",
      price: 450000,
      status: false,
      start_rent_at: null,
      finish_rent_at: null,
      image:
        "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1647146984179-APV.png?alt=media",
      createdAt: "2022-03-09T15:36:11.971Z",
      updatedAt: "2022-03-13T04:49:44.187Z",
    },
    {
      id: 3,
      name: "Xenia",
      category: "small",
      price: 250000,
      status: false,
      start_rent_at: null,
      finish_rent_at: null,
      image:
        "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1647147017740-xenia.png?alt=media",
      createdAt: "2022-03-09T15:37:31.822Z",
      updatedAt: "2022-03-13T04:50:17.751Z",
    },
    {
      id: 4,
      name: "Avanza",
      category: "small",
      price: 300000,
      status: true,
      start_rent_at: "2022-03-08T00:00:00.000Z",
      finish_rent_at: "2022-03-10T00:00:00.000Z",
      image:
        "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1647147033514-avanza.png?alt=media",
      createdAt: "2022-03-09T15:42:06.573Z",
      updatedAt: "2022-03-13T04:50:33.516Z",
    },
    {
      id: 5,
      name: "bagas superrrr",
      category: "eren zeger nub",
      price: 1003444,
      status: true,
      start_rent_at: "2022-03-09T00:00:00.000Z",
      finish_rent_at: "2022-03-15T00:00:00.000Z",
      image:
        "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1649343036246-fe9c6be5759c12298688b2dd97cd5fd1.jpeg?alt=media",
      createdAt: "2022-03-09T15:44:25.895Z",
      updatedAt: "2022-04-07T14:50:36.249Z",
    },
    {
      id: 7,
      name: "Ferrari",
      category: "Small",
      price: 10000000,
      status: false,
      start_rent_at: null,
      finish_rent_at: null,
      image:
        "https://firebasestorage.googleapis.com/v0/b/rent-car-507f6.appspot.com/o/1649343285674-ferrari_211210142359-398.jpg?alt=media",
      createdAt: "2022-04-07T14:54:45.679Z",
      updatedAt: "2022-04-07T14:54:45.679Z",
    },
  ];


  const HandleDataSubmit =(id, name)=>{
      console.log("ini adalah id ", id)
      console.log("ini adalah id ", name)
      setName(name)
      setId(id)
      setParameterPindah(!ParameterPindah);
      
  }


  const TempletAll = () => {
   return dataDummy.map((value, index) => {
    return <div id={value.id}> 
      <h1>Name : {value.name}</h1>
      <h3>Price : {value.price}</h3>
      <button onClick={()=>{HandleDataSubmit(value.id ,value.name)}}>Gift Value </button>
      </div>
    });
  };

  const DetailMobil = () => {
    return <div>

        {Id}
        {Name}
    </div>;
  };

  const DetailDefaul = () => {
    return <div>Detail Default</div>;

    
  };

  return (
    <div>
      {ParameterPindah   ? TempletAll() : DetailMobil()}
      {ParameterPindah === 1 ? <button onClick={()=>{ setParameterPindah(2)}}> Cari Mobil </button> : null}
      {ParameterPindah  === 2? <button onClick={()=>{ setParameterPindah(3)}}>Edit</button> :  null}
      {ParameterPindah  === 3? <button onClick={()=>{ setParameterPindah(1)}}>Edit ganteng</button> :  null}

    </div>
  );
};
