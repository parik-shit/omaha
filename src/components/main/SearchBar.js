import React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
  const handleSearch = (event) => {
    // Handle search logic here
  };

  return (
    <div className="flex ml-20 items-center space-x-2">
      <TextField
        id="search-input"
        label="Search"
        variant="outlined"
        placeholder='Search by profile, setting, artifact etc...'
        size="small"
        fullWidth
        style={{ width: '408px' }} // Set the width to 408px
        InputProps={{
          startAdornment: (
            <IconButton onClick={handleSearch}>
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </div>
  );
};

export default SearchBar;
