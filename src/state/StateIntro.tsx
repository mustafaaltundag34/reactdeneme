import React, { useState } from 'react'
//aktif dinamik durum degisiklikleri icin useState fonksiyonu kullaniliyor 
//fonksiyonu bastan cagirmayi saglıyor
function StateIntro() {
    const [number, setNumber]=useState(0);
    const increase=()=>{
        setNumber(number+1)
        console.log(number);
    }
  return (
    <>
    <h1>{number}</h1>
    <button onClick={increase}>Increase Et</button>
    </>
  )
}

export default StateIntro