import React, { Component } from 'react';
import SearchComponent from './SearchComponent';
import ResultsComponent from './ResultsComponent';

interface AppProps {}

interface AppState {
  searchResults: any[];
}

class App extends Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      searchResults: [],
    };
  }

  handleSearch = (query: string) => {
    fetch(`https://swapi.dev/api/people/?search=${query}`)
      .then(response => response.json())
      .then(data => this.setState({ searchResults: data.results }))
      .catch(error => console.error(error));
  };

  render() {
    return (
      <div style={{ padding: 20 }}>
        <h1>Star Wars Character Search</h1>
        <SearchComponent onSearch={this.handleSearch} />
        <ResultsComponent results={this.state.searchResults} />
      </div>
    );
  }
}

export default App;
