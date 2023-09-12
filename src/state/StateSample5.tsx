import React, { useState } from 'react'

function StateSample5() {

    const [width, setwidth] = useState(200);
    const [height, setheight] = useState(200);

    const change = () => {
        var randomX = Math.floor(Math.random() * 900);
        var randomY = Math.floor(Math.random() * 900);

        setwidth(randomX);
        setheight(randomY);


    }

  return (<>
    
    <button style={{ width:150, height:50, borderStyle:'Black', border:'Bold', backgroundColor:'#e7e7e7'}} onClick={change}>Degistiriniz</button>
    <div style={{width:width, height:height, borderStyle:'Black', border:'Black', display:'outline-block',backgroundColor:'#4CAF50'}}>

    </div>
  </>
  )
}

export default StateSample5