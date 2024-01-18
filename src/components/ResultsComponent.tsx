import React, { Component } from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import DetailsComponent from './DetailsComponent';

interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

interface ResultsComponentProps {
  results: Character[];
}

interface ResultsComponentState {
  selectedCharacter: Character | null;
}

class ResultsComponent extends Component<ResultsComponentProps, ResultsComponentState> {
  state: ResultsComponentState = {
    selectedCharacter: null,
  };

  handleCardClick = (character: Character) => {
    this.setState({ selectedCharacter: character });
  };

  render() {
    const { results } = this.props;
    const { selectedCharacter } = this.state;

    return (
      <Box marginTop={2}>
        {results.map((result, index) => (
          <Card key={index} style={{ marginBottom: 10 }} onClick={() => this.handleCardClick(result)}>
            <CardContent>
              <Typography variant="h6">{result.name}</Typography>
            </CardContent>
          </Card>
        ))}
        <DetailsComponent character={selectedCharacter} onClose={() => this.setState({ selectedCharacter: null })} />
      </Box>
    );
  }
}

export default ResultsComponent;
