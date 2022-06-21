import React from 'react';
import Back from '@mui/icons-material/ArrowBack';
import Delete from '@mui/icons-material/Delete';


import './MessageNav.css';

const MessageNav = ({ messageCount, selectedMessage, updateSelectedMessage, deleteSelectedMessage }) => {
  // if a message is currenbtly selected show a back button + future other message options like delete and favorite
  //  if no message currently selected, i.e. it is showing the message list, just show the message count for thaty folder
  return (
    <div className="message-nav">
      {selectedMessage ? (
        <>
          <div className="back-icon" onClick={() => {
            updateSelectedMessage();
          }}>
            <Back />
          </div>
          <div className="back-icon" onClick={() => {
            deleteSelectedMessage(selectedMessage);
          }}>
            <Delete />
          </div>
        </>
      ) :
        <div className="message-count">{messageCount} of {messageCount}</div>
      }
    </div>
  );
}

export default MessageNav;
