import React, { useState, useEffect } from 'react';
import foldersData from '../data/folders';
import Add from '@mui/icons-material/Add';

import './Sidebar.css'

const Sidebar = ({ selectedFolder, updateSelectedFolder, composingMessage, updateComposingMessage }) => {

  // FOLDERS
  const [folders, updateFolders] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      // Mock an asynchronous api fetch by using setTimeout with async/await
      // an example of a "real" fetch using the fetch API also included below
      // await fetch('https://url-to-fetch-folders.com/folders')
      // .then((res) => {
      //   updateFolders(res.json());
      // })
      // .catch((err) => {
      //   console.warn('Error fetching folders :', err)
      // })
      await setTimeout(() => {
        updateFolders(foldersData);
      }, 500)
      // mock a half second delay
    };
    fetchData();
  }, []);
  // include empty array in effect so it only fetches on mount, no every update


  return (
    <div className="sidebar">
      <div className="compose-new" onClick={() => {
        updateComposingMessage(!composingMessage)
      }}>
        <Add />
        Compose
      </div>
      <div className="sidebar-section folders">
        {folders.map((folder, i) => {
          const isSelected = folder.toLowerCase() === selectedFolder.toLowerCase();
          return (
            <div
              key={`${folder}-${i}`}
              className={`folder-title ${isSelected ? 'selected' : ''}`}
              onClick={() => {
                updateSelectedFolder(folder)
              }}
            >
              {folder}
            </div>
          )
        })}
      </div>
      <div className="sidebar-section meets">
      </div>
      <div className="sidebar-section hangouts">
      </div>
    </div>
  );
}

Sidebar.defaultProps = {
  selectedFolder: 'Inbox',
  updateSelectedFolder: () => {},
}

export default Sidebar;
