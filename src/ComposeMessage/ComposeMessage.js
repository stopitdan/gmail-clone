import React, { useState } from 'react';


// Styles
import './ComposeMessage.css';

function ComposeMessage({ sendComposedMessage }) {
  const [to, updateTo] = useState('');
  const [subject, updateSubject] = useState('');
  const [body, updateBody] = useState('');
  return (
    <div className="compose-message">
      <div className="compose-to">
        <input placeholder="To" onChange={(e) => { updateTo(e.target.value) }} value={to} />
      </div>
      <div className="compose-subject">
      <input placeholder="Subject" onChange={(e) => { updateSubject(e.target.value) }} value={subject} />

      </div>
      <div className="compose-body">
        <textarea placeholder="Body" onChange={(e) => { updateBody(e.target.value) }} value={body} />
      </div>
      <div className="send-button" onClick={() => {
        sendComposedMessage({ to, subject, body })
      }}>
        Send
      </div>
    </div>
  );
}

export default ComposeMessage;
