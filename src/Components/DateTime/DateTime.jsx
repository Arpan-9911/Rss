import React from 'react'

const DateTime = () => {
  const updateDateTime = () => {
    const dateTime = new Date()

    const options = { 
      day: '2-digit', 
      month: '2-digit', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    };
    
    const dateTimeStr = dateTime.toLocaleString("en-US", options)
  
    document.getElementById("dateTime").value = dateTimeStr
  }
  setInterval(updateDateTime, 1000)
  return (
    <div className="w-screen h-fit text-xl text-blue-600 font-bold text-right px-8 mdmax:text-center mdsmax:px-2">
      <div><input type="text" name="date" id="dateTime" disabled className="bg-transparent text-right mdmax:text-center w-fit outline-none" /></div>
    </div>
  )
}

export default DateTime