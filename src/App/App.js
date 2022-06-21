import React, { useState } from 'react';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import MessageWindow from '../MessageWindow/MessageWindow'
import ComposeMessage from '../ComposeMessage/ComposeMessage'

// Styles
import './App.css';


function App() {
  const [selectedFolder, updateSelectedFolder] = useState('Inbox');
  const [composingMessage, updateComposingMessage] = useState(false);

  const sendComposedMessage = (message) => {
    console.log('--- Send Composed Message Triggered ---');
    console.log('url: www.api.com/messages/new')
    console.log('method: POST');
    console.log('payload:', {to: message.to, subject: message.subject, body: message.body});

    // set composingMessage to be false so it closes the popuyp when you click send
    updateComposingMessage(false);
    console.log('--- Send Composed Message Completed ---');
  }

  return (
    <div className="App">
      <Header />
      <Sidebar
        selectedFolder={selectedFolder}
        updateSelectedFolder={updateSelectedFolder}
        updateComposingMessage={updateComposingMessage}
        composingMessage={composingMessage}
      />
      <MessageWindow selectedFolder={selectedFolder} />
      {composingMessage &&
        <ComposeMessage sendComposedMessage={sendComposedMessage} />
      }
    </div>
  );
}

export default App;
