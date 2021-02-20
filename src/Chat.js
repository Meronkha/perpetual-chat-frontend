// import './Chat.css';

import React, { useEffect, useState } from "react";

function Chat() {
  const [value, setValue] = useState('');
  const [item, setItem] = useState([
    { userHash: 'User1234',
      itemName: 'item 1'},
  ]);
  const handleAddButtonClick = (value) => {
    if (value == "") return 
    const newItem = {
      userHash: 'User898',
      itemName: value,
    };

    const newItems = [...item, newItem];
    setItem(newItems);
    setValue('');
  };
  return (
    <div className="Chat">
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", paddingTop: "3vw"}}> 
        <div style={{width: "40%", outline: "1px solid black", padding: "5px"}}>
          <p style={{textAlign: "left"}}>
            todo:  <br/>
            1) API call to find messages for time period <br/> 
            2) Loop through these messages and display chronologically<br/>
            3) Poll API periodically for delta<br/>
            4) Rerender upon send <br/>
            5) Homepage <br/>
            6) Room generator
            consideraitons:<br/>
            * How to make decentralized <br/>
            * OnSite hashing<br/>
            * UI stuff<br/>
            * Invite link <br/>
            

          </p>
          <p style={{textAlign: "left"}}>
          {item.map((x, index) =>   
            <>
            <span>{x.userHash}::  {x.itemName} </span> 
            <br/>
            </> )}
          </p>
          <form>
            <input type="text" id="fname" name="chat" onChange={event => setValue(event.target.value)} value={value} style={{width: "80%"}}/>
            <input value="send" type="button"  onClick={event => handleAddButtonClick(value)}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Chat;
