
import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Settings from '@mui/icons-material/Settings';
import Help from '@mui/icons-material/Help';
import Contacts from '@mui/icons-material/Contacts';
import SearchBar from './SearchBar'

import contactData from '../data/contacts';

// Styles
import './Header.css';

const ContactDropdown = () => {
  const [contacts, updateContacts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      await setTimeout(() => {
        // update the contacts data directly form the contacts import
        updateContacts(contactData)
      }, 0)
    };
    fetchData();
  }, []);

  return (
    <div className="contacts-dropdown">
      {contacts.map((contact, i) => {
        return (
          <div className="contact-row" key={contact.name}>
            <b style={{whiteSpace: 'nowrap'}}>{contact.name}</b> - {contact.email}
          </div>
        )
      })}
    </div>
  )
}

const Header = () => {
  const [showContactDropdown, updateShowContactDropdown] = useState(false)
  return (
    <div className="header-wrapper">

      <div className="left-header">
        <div className="sidebar-icon">
          <MenuIcon />
        </div>
        <div className="gmail-icon">
          <img src="https://danmail.s3.us-west-2.amazonaws.com/DanMail.png" alt="dan-mail"/>
        </div>
      </div>

      <div className="search-bar">
        <SearchBar />
      </div>

      <div className="right-header">
        <div className="contacts-wrapper">
          <div className="right-icon support-icon">
            <Contacts onClick={() => {
              updateShowContactDropdown(!showContactDropdown)
            }}/>
          </div>
          {showContactDropdown && <ContactDropdown />}
        </div>
        <div className="right-icon support-icon">
          <Help />
        </div>
        <div className="right-icon settings-icon">
          <Settings />
        </div>
        <div className="right-icon profile-icon">
          <div className="profile-pic" />
        </div>
      </div>
    </div>
  );
}

export default Header;
