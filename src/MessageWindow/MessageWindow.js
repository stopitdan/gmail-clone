import React, { useState, useEffect } from 'react';
import folderMessages from '../data/folder-messages';


import MessageNav from './MessageNav/MessageNav';
import MessageList from './MessageList/MessageList';
import Message from './Message/Message';

import './MessageWindow.css';

const MessageWindow = ({ selectedFolder }) => {
  const [messages, updateMessages] = useState([]);
  const [selectedMessage, updateSelectedMessage] = useState();


  useEffect(() => {
    const fetchData = async () => {
      await setTimeout(() => {

        // select only messages that are housed within the currently selected folder (i.e. inbox, trash, etc.)
        const currentFolder = folderMessages.find(x => x.folder.toLowerCase() === selectedFolder.toLowerCase());
        // only update if i actually find the curent folder - not REALLY necessary since the only way to set the current folder is by click action,
        // so it will always exist prior to being set, but just an example of the checks i would add to make sure its as safe as can be
        let newMessages = [];
        if (currentFolder) newMessages = currentFolder.messages;
        // update the messages shown to just those that are in the selectedFolder or an empty array oif that is none
        updateMessages(newMessages);
        // when changing to a new folder, also clear the currently selected message.
        updateSelectedMessage()

      }, 0)
    };
    fetchData();
  }, [selectedFolder]);

  // custom hook for deleting - this is where is would fire an asynchronous POST request
  // but for right now just call a reguylar function and log what i WOULD do
  const deleteSelectedMessage = (selectedMessage) => {
    console.log('--- Delete Selected Message Triggered ---');
    console.log('url: www.api.com/messages/<message-id>');
    console.log('method: DELETE');
    console.log('payload:', selectedMessage);

    console.log('message array post delete:', messages.filter(x => x.id !== selectedMessage.id))
    // update the list of messages in state
    updateMessages(messages.filter(x => x.id !== selectedMessage.id));
    // remove the current selected message so it reverts to message list after deletion
    updateSelectedMessage();
    console.log('--- Delete Selected Message Completed ---');
  }

  // include empty array in effect so it only fetches on mount, no every update
  return (
    <div className="message-window">
      <MessageNav messageCount={messages.length} selectedMessage={selectedMessage} updateSelectedMessage={updateSelectedMessage} deleteSelectedMessage={deleteSelectedMessage} />
      {selectedMessage ?
        <Message selectedMessage={selectedMessage} /> :
        <MessageList messages={messages} selectedMessage={selectedMessage} updateSelectedMessage={updateSelectedMessage} />
      }
    </div>
  );
}

MessageWindow.defaultProps = {
  selectedFolder: 'Inbox',
}

export default MessageWindow;
