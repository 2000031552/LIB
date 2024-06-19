import React, { useState, ChangeEvent } from 'react';
import {
  Container,
  TextField,
  Typography,
  Button,
  Grid,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import CancelIcon from '@mui/icons-material/Cancel';

interface ProfileState {
  name: string;
  email: string;
  phone: string;
}

const Profile: React.FC = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [profile, setProfile] = useState<ProfileState>({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '123-456-7890',
  });

  const [editedProfile, setEditedProfile] = useState<ProfileState>({ ...profile });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setProfile(editedProfile);
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setEditedProfile({ ...profile });
    setIsEditing(false);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedProfile((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Profile
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            name="name"
            value={editedProfile.name}
            onChange={handleChange}
            fullWidth
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            name="email"
            value={profile.email}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Phone"
            name="phone"
            value={editedProfile.phone}
            onChange={handleChange}
            fullWidth
            disabled={!isEditing}
          />
        </Grid>
        <Grid item xs={12}>
          {isEditing ? (
            <div>
              <IconButton color="secondary" onClick={handleSaveClick}>
                <SaveIcon />
              </IconButton>
              <IconButton color="secondary" onClick={handleCancelClick}>
                <CancelIcon />
              </IconButton>
            </div>
          ) : (
            <Button
              variant="contained"
              color="secondary"
              startIcon={<EditIcon />}
              onClick={handleEditClick}
            >
              Edit
            </Button>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
