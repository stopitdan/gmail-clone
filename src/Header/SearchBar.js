import React, { useState } from 'react';
import './Header.css';


import FilledInput from "@mui/material/FilledInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

// Icons
import Search from '@mui/icons-material/Search';
import Tune from '@mui/icons-material/Tune';


const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <FilledInput
        type="text"
        className="search-input"
        placeholder="Search Mail..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        startAdornment={
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment position="end">
            <IconButton>
              <Tune />
            </IconButton>
          </InputAdornment>
        }
      />
    );
}

export default SearchBar;
