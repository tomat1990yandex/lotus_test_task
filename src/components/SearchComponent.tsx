import React, { Component, ChangeEvent, KeyboardEvent } from 'react';
import { TextField, Button, Box, Paper } from '@mui/material';

interface SearchComponentProps {
  onSearch: (query: string) => void;
}

interface SearchComponentState {
  searchQuery: string;
}

class SearchComponent extends Component<SearchComponentProps, SearchComponentState> {
  constructor(props: SearchComponentProps) {
    super(props);
    this.state = {
      searchQuery: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSearch = () => {
    this.props.onSearch(this.state.searchQuery);
  };

  handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    return (
      <Paper elevation={3} style={{ padding: 20 }}>
        <Box display="flex" alignItems="center">
          <TextField
            label="Search by name"
            variant="outlined"
            value={this.state.searchQuery}
            onChange={this.handleChange}
            onKeyDown={this.handleKeyPress}
          />
          <Button variant="contained" onClick={this.handleSearch} style={{ marginLeft: 10 }}>
            Search
          </Button>
        </Box>
      </Paper>
    );
  }
}

export default SearchComponent;
