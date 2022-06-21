import React from 'react';
// import CheckBox from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlank from '@mui/icons-material/CheckBoxOutlineBlank';
// import Star from '@mui/icons-material/Star';
import StarOutline from '@mui/icons-material/StarOutline';
import LabelImportant from '@mui/icons-material/LabelImportant';


import './MessageList.css';


const MessageRow = ({ updateSelectedMessage, subject, from, id }) => {
  return (
    <div key={id} className="message-row" onClick={() => {
      updateSelectedMessage({
        subject,
        from,
        id
      })
    }}>
      <div className="icons">
        <div className={`message-row-icon`}>
          <CheckBoxOutlineBlank />
        </div>
        <div className={`message-row-icon`}>
          <StarOutline />
        </div>
        <div className={`message-row-icon label-important`}>
          <LabelImportant />
        </div>
      </div>

      <div className="from">
        {from}
      </div>

      <div className="subject">
        {subject}
      </div>
    </div>
  )
}

const MessageList = ({ messages, updateSelectedMessage }) => {

  // Empty Folder
  if (!messages.length) {
    return (
      <div className="message-list">
        <div className="no-messages">Folder is Empty</div>
      </div>
    );
  }


  // No Message Selected
  return (
    <div className="message-list">
      {messages.map((message, i) => (
        <span key={message.id}>
          <MessageRow
            id={message.id}
            subject={message.subject}
            from={message.from}
            updateSelectedMessage={updateSelectedMessage}
          />
        </span>
      ))}
    </div>
  );

}

export default MessageList;
