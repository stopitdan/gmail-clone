import React, { useState, useEffect } from 'react';
import messages from '../../../data/messages';


import './Message.css';


const Message = ({ selectedMessage }) => {
  const { subject, id } = selectedMessage;
  const [messageData, updateMessageData] = useState();

  // when the message component first mounts, fetch the details for the message (body, date, etc)
  useEffect(() => {
    const fetchData = async () => {
      await setTimeout(() => {

        // select only messages that are housed within the currently selected folder (i.e. inbox, trash, etc.)
        const currentMessage = messages.find(x => x.id === id);
        // only update if i actually find the curent folder - not REALLY necessary since the only way to set the current folder is by click action,
        // so it will always exist prior to being set, but just an example of the checks i would add to make sure its as safe as can be
        let messageData = null;
        if (currentMessage) messageData = currentMessage;
        // update the messages shown to just those that are in the selectedFolder or an empty array oif that is none
        updateMessageData(messageData);

      }, 0)
    };
    fetchData();
  }, [id]);


  // if no message data is found, or it hasnt loaded yet, return a loading message to avoid breakage when access messageData properties
  if (!messageData) return 'Loading...'
  return (
    <div className="message">
      <div className="subject-header">
        {subject}
      </div>
      <div className="from-header">
        {messageData.from}
      </div>
      <p className="body">
        {messageData.body}
      </p>
    </div>
  )
}

export default Message
