import React, { Component } from 'react';
import { Dialog, DialogTitle, DialogContent, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

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

interface DetailsComponentProps {
  character: Character | null;
  onClose: () => void;
}

class DetailsComponent extends Component<DetailsComponentProps> {
  render() {
    const { character, onClose } = this.props;

    return (
      <Dialog open={!!character} onClose={onClose} maxWidth="md" fullWidth>
        {character && (
          <>
            <DialogTitle>
              {character.name} Details
              <IconButton aria-label="close" style={{ position: 'absolute', right: 8, top: 8 }} onClick={onClose}>
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent>
              <Typography>Height: {character.height}</Typography>
              <Typography>Mass: {character.mass}</Typography>
              <Typography>Hair Color: {character.hair_color}</Typography>
              <Typography>Skin Color: {character.skin_color}</Typography>
              <Typography>Eye Color: {character.eye_color}</Typography>
              <Typography>Birth Year: {character.birth_year}</Typography>
              <Typography>Gender: {character.gender}</Typography>
            </DialogContent>
          </>
        )}
      </Dialog>
    );
  }
}

export default DetailsComponent;
