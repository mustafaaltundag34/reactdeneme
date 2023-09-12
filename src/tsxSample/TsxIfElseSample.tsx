import React from 'react'

function TsxIfElseSample() {
  var onlinestatus=true;
  var aciklama="ONLINE BACKEND"

  return (
    <>
    
          {onlinestatus ? <h1>User Online</h1> : <h1>User OFFLINE</h1>}

    </>

  )
}
export default TsxIfElseSample
